import { NgModule } from '@angular/core';

// Components
import { NavigationComponent } from './navigation.component';

@NgModule({
	declarations: [
		NavigationComponent
	],
	exports: [
		NavigationComponent
	]
})
export class NavigationModule { }
