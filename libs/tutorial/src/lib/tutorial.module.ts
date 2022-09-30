import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyProfileComponent],
  exports: [MyProfileComponent],
})
export class TutorialModule {}
