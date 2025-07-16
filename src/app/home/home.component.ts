import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { Observable, map } from 'rxjs';
import * as XLSX from 'xlsx';
import { AuthenticationResult } from '@azure/msal-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class HomeComponent {
  idToken$ = this.auth.activeAccount$.pipe(map(acc => acc?.idTokenClaims));
  rawIdToken$ = this.auth.activeAccount$.pipe(map(acc => acc?.idToken));
  accessToken$!: Observable<AuthenticationResult>;

  constructor(private auth: AuthService) {
    this.accessToken$ = this.auth.acquireTokens(['User.Read']);
  }

  logout(): void {
    this.auth.logout();
  }

  exportTokens(idToken: string | undefined, claims: unknown, access: AuthenticationResult): void {
    const claimObject = typeof claims === 'object' && claims !== null ? claims as Record<string, unknown> : {};
    const worksheet = XLSX.utils.json_to_sheet([{ idToken, accessToken: access.accessToken, ...claimObject }]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tokens');
    XLSX.writeFile(workbook, 'tokens.xlsx');
  }
}
