import React from "react";
import * as Realm from "realm-web";
import { app } from "./AppProvider";

import { setCookie, getCookie, getRemember, encryptText } from "../utils/helpers";

if (!getCookie("email") && !getCookie("password")) {
  setCookie("", "");
}

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(null);
  const [error, setError] = React.useState();
  const [remember, setRemember] = React.useState(getRemember());

  React.useEffect(() => {
    const user = app.currentUser;
    // console.log(auth)

    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        auth,
        setAuth,
        error,
        remember,
        setRemember,
        logIn: async (email, password) => {
          try {
            await app
              .logIn(Realm.Credentials.emailPassword(email, password))
              .then((success) => {
                console.log(success);
                setAuth(true);

                if (remember) {
                  setCookie(encryptText(email), encryptText(password));
                }
              });
          } catch (error) {
            console.log(error.errorCode);
            if (error.errorCode === "InvalidPassword") {
              setError("This account does not exist");
            }
          }
        },
        logOut: async () => {
          try {
            setLoading(true);
            await app.currentUser.logOut().then((success) => {
              setAuth(false);
              setLoading(false);
            });
          } catch (error) {
            console.log(error);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
