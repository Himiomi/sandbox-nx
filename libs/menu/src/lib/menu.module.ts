import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {DisplayModule} from "@sandbox-nx/display";

@NgModule({
    imports: [CommonModule, DisplayModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
