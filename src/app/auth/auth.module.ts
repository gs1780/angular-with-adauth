import { NgModule } from '@angular/core';
import { MsalModule, MsalService, MsalGuard, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionType } from '@azure/msal-browser';
import { msalInstance } from './auth.config';

@NgModule({
  imports: [
    MsalModule.forRoot(msalInstance, {
      interactionType: InteractionType.Redirect,
      authRequest: { scopes: ['User.Read'] },
    }, {
      interactionType: InteractionType.Redirect,
    }),
  ],
  providers: [MsalService, MsalGuard, MsalBroadcastService],
})
export class AuthModule {}
