import { ApolloClient, InMemoryCache } from "@apollo/client";

export const GqlClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first", // Utiliza cache primeiro
      nextFetchPolicy: "cache-and-network", // Para atualizações subsequentes
    },
  },
});