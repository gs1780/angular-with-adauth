import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { InteractionType } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private msalService: MsalService) {}

  login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logoutRedirect();
  }

  get username(): string | null {
    const account = this.msalService.instance.getActiveAccount();
    return account ? account.username : null;
  }
}
