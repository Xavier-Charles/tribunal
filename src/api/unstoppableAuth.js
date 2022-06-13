
// connectors.ts

import {UAuthMoralisConnector} from '@uauth/moralis'

// Instantiate your other connectors.
export const injected = {}

export const walletconnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: import.meta.env.VITE_TEST_CLIENT_ID,
  redirectUri: import.meta.env.VITE_TEST_REDIRECT_URI,
  fallbackIssuer: import.meta.env.VITE_TEST_FALLBACK_ISSUER,

  // Scope must include openid and wallet
  scope: 'openid wallet',
  // Injected and walletconnect connectors are required
  connectors: {injected, walletconnect},
});

export const uauth = {connector: UAuthMoralisConnector};

const connectors = {
  injected,
  walletconnect,
  uauth,
}

export default connectors