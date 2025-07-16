import { NgModule } from '@angular/core';
import { MsalModule, MsalService, MsalGuard, MsalBroadcastService } from '@azure/msal-angular';
import { msalInstance, guardConfig, interceptorConfig } from './auth.config';

@NgModule({
  imports: [
    MsalModule.forRoot(msalInstance, guardConfig, interceptorConfig),
  ],
  providers: [MsalService, MsalGuard, MsalBroadcastService],
})
export class AuthModule {}
