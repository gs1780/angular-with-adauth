import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username$ = this.auth.activeAccount$.pipe(map(acc => acc?.username));

  constructor(private auth: AuthService) {}

  logout(): void {
    this.auth.logout();
  }
}
