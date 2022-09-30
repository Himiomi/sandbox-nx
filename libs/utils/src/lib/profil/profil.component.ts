import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sandbox-nx-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent {
  @Input()
  name!:String;
}
