import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ContactComponent } from './contact.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ContactComponent
	],
	exports: [
		ContactComponent
	]
})
export class ContactModule { }
