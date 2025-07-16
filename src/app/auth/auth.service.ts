import { Injectable } from '@angular/core';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus, AuthenticationResult, EventMessage, EventType } from '@azure/msal-browser';
import { filter, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  activeAccount$ = this.msalBroadcastService.inProgress$.pipe(
    filter(status => status === InteractionStatus.None),
    map(() => this.msalService.instance.getActiveAccount())
  );

  constructor(private msalService: MsalService, private msalBroadcastService: MsalBroadcastService) {
    const activeAccount = this.msalService.instance.getActiveAccount();
    const cachedAccounts = this.msalService.instance.getAllAccounts();
    if (!activeAccount && cachedAccounts.length > 0) {
      this.msalService.instance.setActiveAccount(cachedAccounts[0]);
    }

    this.msalBroadcastService.msalSubject$
      .pipe(filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS))
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.msalService.instance.setActiveAccount(payload.account);
      });
  }

  login(): void {
    this.msalService.loginRedirect();
  }

  logout(): void {
    this.msalService.logoutRedirect();
  }

  acquireTokens(scopes: string[]): Observable<AuthenticationResult> {
    const account = this.msalService.instance.getActiveAccount();
    return this.msalService.acquireTokenSilent({ scopes, account: account ?? undefined });
  }
}
