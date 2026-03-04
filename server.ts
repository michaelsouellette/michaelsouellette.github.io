/** @format */

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import { minify } from 'html-minifier-terser';
import express from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express();
	const distFolder = join(process.cwd(), 'dist/app/browser');
	const indexHtml = existsSync(join(distFolder, 'index.original.html'))
		? join(distFolder, 'index.original.html')
		: join(distFolder, 'index.html');

	const commonEngine = new CommonEngine();

	server.set('view engine', 'html');
	server.set('views', distFolder);

	// Serve static files from /browser
	server.get(
		'*.*',
		express.static(distFolder, {
			maxAge: '1y'
		})
	);

	// All regular routes use the Universal engine
	server.get('*', (req, res, next) => {
		commonEngine
			.render({
				bootstrap: AppServerModule,
				documentFilePath: indexHtml,
				url: `${req.protocol}://${req.headers['host']}${req.originalUrl}`,
				publicPath: distFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
			})
			.then(async (html) => {
				// Minify HTML before sending it
				const minifiedHTML = await minify(html, {
					caseSensitive: true,
					collapseWhitespace: true,
					conservativeCollapse: true,
					continueOnParseError: false,
					minifyCSS: true,
					minifyJS: true,
					removeAttributeQuotes: true,
					removeComments: true,
					removeEmptyAttributes: false,
					removeEmptyElements: false,
					removeOptionalTags: false,
					removeRedundantAttributes: false
				});

				res.send(minifiedHTML || html);
			})
			.catch((err) => next(err));
	});

	return server;
}

function run(): void {
	const port = process.env['PORT'] || 4000;

	// Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

run();

export * from './src/main.server';
