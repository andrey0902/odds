import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HeaderModule } from '../shared/header/header.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../shared/input/input.module';
import { SelectModule } from '../shared/select/select.module';
import { ButtonModule } from '../shared/button/button.module';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    InputModule,
    SelectModule,
    ButtonModule,
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
