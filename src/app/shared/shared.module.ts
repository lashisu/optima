import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

// Material Flex
import { FlexLayoutModule } from "@angular/flex-layout";
// Material
import { MatMenuModule, MatButtonModule, MatSidenavModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';

const MODULES = [
  CommonModule,
  HttpModule,
  FlexLayoutModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class SharedModule { }
