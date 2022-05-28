import * as React from "react";
import * as Realm from "realm-web";
import { app } from "./provider";
import { createBrowserHistory } from "history";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(null);
  const history = createBrowserHistory();

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
        auth,
        setAuth,
        logIn: async (email, password, actions) => {
          try {
            const user = await app.logIn(
              Realm.Credentials.emailPassword(email, password)
            );
            // console.log(user)
            // history.push({ pathname: "/" });
          } catch (error) {
            console.log(error.errorCode);
            if (error.errorCode === "InvalidPassword") {
              actions.setFieldError("invalidCredentials", "This account does not exist")
            }
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
