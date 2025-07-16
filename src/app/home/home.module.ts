import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedMaterialModule } from '../shared/shared-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
