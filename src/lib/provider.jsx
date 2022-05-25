import * as Realm from "realm-web";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });

async function getValidAccessToken() {
  if (!app.currentUser) {
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser.accessToken;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://ap-southeast-1.aws.stitch.mongodb.com/api/client/v2.0/app/${process.env.REACT_APP_REALM_APP_ID}/graphql`,
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

const AppWithApollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export { app, AppWithApollo };
