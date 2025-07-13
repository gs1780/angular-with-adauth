export const environment = {
  production: false,
  azureAd: {
    clientId: '<CLIENT_ID>',
    authority: 'https://login.microsoftonline.com/<TENANT_ID>',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200',
    knownAuthorities: ['login.microsoftonline.com']
  }
};
