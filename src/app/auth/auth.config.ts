import { MsalRedirectComponent, MsalRedirectComponentConfig } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export const msalInstance: IPublicClientApplication = new PublicClientApplication({
  auth: {
    clientId: '7f6497c4-b4cd-4f51-8c4a-33856c30408b',
    authority: 'https://login.microsoftonline.com/a1bde0b1-b0cb-453d-b3f8-764d6c1380f9',
    redirectUri: 'http://localhost:4200/home',
    postLogoutRedirectUri: 'http://localhost:4200/sign-off',
  }
});

export const msalConfig: MsalRedirectComponentConfig = {
  instance: msalInstance,
};
