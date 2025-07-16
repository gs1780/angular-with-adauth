import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { SignOffComponent } from './sign-off.component';

@NgModule({
  declarations: [SignOffComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: SignOffComponent }])
  ],
})
export class SignOffModule {}
