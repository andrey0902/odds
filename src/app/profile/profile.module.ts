import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderModule,
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
