import { NgModule } from '@angular/core';

import {
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
 ],
  exports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
 ],
})
export class MaterialModule { }
