import { stringify } from "query-string";

// Static oidc params for a single provider
const authority = "https://chainos.onelogin.com/oidc/2";
const client_id = "0ca15800-f11f-013a-b9a5-066b7fccc995213288";
const redirect_uri = "http://localhost:3000/auth";
const response_type = "id_token token";
const scope = "openid profile";

export const beginAuth = ({ state, nonce }) => {
  console.log(state, nonce, 'state, nonce,')
  // Generate authentication URL
  const params = stringify({
    client_id,
    redirect_uri,
    response_type,
    scope,
    state,
    nonce
  });
  const authUrl = `${authority}/auth?${params}`;
  console.log(authUrl, 'authUrlauthUrl');

  // Attempt login by navigating to authUrl
  window.location.assign(authUrl);
};
