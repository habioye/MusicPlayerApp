import { NgModule } from "@angular/core";
import {
  MatButtonModule,
} from "@angular/material/button";

import {
  MatListModule
} from '@angular'
const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
