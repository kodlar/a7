import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  
  /*STEYER*/
  /*
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  clientId: 'spa-demo',
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email',
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  */


  /*BTCTURK */
  issuer: 'https://broker-api-id-v2.azurewebsites.net',
  clientId: 'api',
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'role openid email',
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: false,
  // silentRefreshShowIFrame: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  oidc : true
};

