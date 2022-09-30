import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sandbox-nx-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassicComponent {
  @Input()
  text!:String
}
