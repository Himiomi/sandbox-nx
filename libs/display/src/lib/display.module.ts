import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicComponent } from './classic/classic.component';
import { DarkComponent } from './dark/dark.component';
import { BottleComponent } from './bottle/bottle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClassicComponent, DarkComponent, BottleComponent],
  exports: [ClassicComponent, DarkComponent, BottleComponent],
})
export class DisplayModule {}
