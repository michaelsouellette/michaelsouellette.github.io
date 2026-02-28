import { NgModule } from '@angular/core';

// Components
import { AboutComponent } from './about.component';

@NgModule({
	declarations: [
		AboutComponent
	],
	exports: [
		AboutComponent
	]
})
export class AboutModule { }
