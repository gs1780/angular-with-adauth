import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule]
})
export class SharedMaterialModule {}
