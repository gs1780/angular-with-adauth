export const environment = {
  production: true,
  azureAd: {
    clientId: 'a4b24841-90b6-4360-92f8-c6828f90ae67',
    authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200',
    knownAuthorities: ['login.microsoftonline.com']
  }
};
