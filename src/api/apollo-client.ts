import { ApolloClient, InMemoryCache } from "@apollo/client";

export const GqlClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: "no-cache",
    },
  },
});