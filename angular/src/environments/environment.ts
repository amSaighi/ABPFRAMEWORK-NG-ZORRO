import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4201';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44335',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
  },
  apis: {
    default: {
      url: 'https://localhost:44384',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Config.Environment;
