import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, map } from 'rxjs';
import * as XLSX from 'xlsx';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
    const worksheet = XLSX.utils.json_to_sheet([{ idToken, accessToken: access.accessToken, ...claims }]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tokens');
    XLSX.writeFile(workbook, 'tokens.xlsx');
  }
}
