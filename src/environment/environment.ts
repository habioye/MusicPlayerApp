// src/environment/environment.ts
export const environment = {
  production: false,
  auth0: {
    clientID: "[YOUR_AUTH0_CLIENT_ID]",
    domain: "[YOUR_AUTH0_DOMAIN]",
    redirectUri: "http://localhost:4200",
    logoutUrl: "http://localhost:4200"
  }
};
