import { NgModule } from '@angular/core';

// Components
import { ContactComponent } from './contact.component';

@NgModule({
	declarations: [
		ContactComponent
	],
	exports: [
		ContactComponent
	]
})
export class ContactModule { }
