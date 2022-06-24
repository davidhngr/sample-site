import React from "react";
import * as Realm from "realm-web";
import { app } from "./AppProvider";

import {
  setCookie,
  getCookie,
  getRemember,
  encryptText,
} from "../utils/helpers";

if (!getCookie("email") && !getCookie("password")) {
  setCookie("", "");
}

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(app.currentUser);
  const [error, setError] = React.useState();
  const [remember, setRemember] = React.useState(getRemember());
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    if (auth) {
      getUserData();
    }
  }, [auth]);

  const getUserData = async () => {
    const db = app.currentUser
      .mongoClient("mongodb-atlas")
      .db("Sample-site")
      .collection("User");

    const data = await db.findOne({ id: app.currentUser.id });

    setUserData(data);
    // console.log(data);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        auth,
        setAuth,
        error,
        remember,
        setRemember,
        userData,
        logIn: async (email, password) => {
          try {
            await app
              .logIn(Realm.Credentials.emailPassword(email, password))
              .then((success) => {
                // console.log(success);
                setAuth(app.currentUser);
                setError();

                if (remember) {
                  setCookie(encryptText(email), encryptText(password));
                } else {
                  setCookie("", "");
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
              setUserData();
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
