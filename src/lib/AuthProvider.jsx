import * as React from "react";
import * as Realm from "realm-web";
import { app } from "./provider";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(null);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logIn: async (email, password) => {
          try {
            await app
              .logIn(Realm.Credentials.emailPassword(email, password))
              .then((result) => console.log(result));
          } catch (error) {
            console.log(error);
          }
        },
        logOut: async () => {
            await app.currentUser.logOut();
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
