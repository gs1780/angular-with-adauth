import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MsalRedirectComponent, provideMsal } from '@azure/msal-angular';
import { msalInstance, guardConfig, interceptorConfig } from './auth/auth.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideAnimations(),
    provideMsal(msalInstance, guardConfig, interceptorConfig),
  ],
  bootstrap: [MsalRedirectComponent],
};
