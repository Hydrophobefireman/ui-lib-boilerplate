import {AuthBridge} from "@hydrophobefireman/flask-jwt-jskit";
import {redirect} from "@hydrophobefireman/ui-lib";

const client = new AuthBridge<any>();

// change these according to your backend
// client.setRoutes({
//   loginRoute: "/login",
//   refreshTokenRoute: "/refresh",
//   initialAuthCheckRoute: "/accounts/me",
// });
// client.onLogout(() => redirect("/login"));

const {useIsLoggedIn, useCurrentAuthState} = client.getHooks();

const requests = client.getHttpClient();

export {useIsLoggedIn, useCurrentAuthState, requests, client};
