import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalRedirectComponent, MsalService, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalGuard } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [MsalGuard] }
];

export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: environment.azureAd.clientId,
      authority: environment.azureAd.authority,
      redirectUri: environment.azureAd.redirectUri,
      postLogoutRedirectUri: environment.azureAd.postLogoutRedirectUri,
      knownAuthorities: environment.azureAd.knownAuthorities
    },
    cache: {
      cacheLocation: 'localStorage'
    }
  });
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['openid', 'profile', 'email']
    }
  };
}

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule.forRoot(routes),
    MsalModule.forRoot(MSALInstanceFactory(), MSALGuardConfigFactory(), {
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map()
    })
  ],
  providers: [MsalService, MsalGuard],
  bootstrap: [MsalRedirectComponent, AppComponent]
})
export class AppModule { }
