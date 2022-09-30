import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { TextComponent } from './text/text.component';
import {FormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  declarations: [DateComponent, TextComponent],
  exports: [DateComponent, TextComponent],
})
export class InputModule {}
