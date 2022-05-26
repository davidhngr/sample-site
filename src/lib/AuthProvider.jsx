import * as React from "react";
import * as Realm from "realm-web";
import { app } from "./provider";
import { createBrowserHistory } from "history";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(null);
  const history = createBrowserHistory();

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logIn: async (email, password) => {
          try {
            const user = await app.logIn(Realm.Credentials.emailPassword(email, password));
            // console.log(user)
            // history.push({ pathname: "/" });
          } catch (error) {
            console.log(error);
          }
        },
        logOut: async () => {
          await app.currentUser.logOut();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
