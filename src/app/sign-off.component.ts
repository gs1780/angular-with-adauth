import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-sign-off',
  imports: [MatCardModule],
  template: `<mat-card><p>You have been signed off</p></mat-card>`,
})
export class SignOffComponent {}
