import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, createHttpLink, ApolloClient, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ToastProvider } from 'react-toast-notifications';
import './index.scss';
import Routes from './routes';
import cache from './apollo/cache';
import errorLink, { cleanTypeName } from './apollo/errorHandling';

export const baseUrl = process.env.REACT_APP_API_URL || 'https://my-clinify-api-stag.herokuapp.com';

const httpLink = createHttpLink({ uri: `${baseUrl}/graphql` });

const authLink = setContext(async (_, { headers }) => {
  const token = sessionStorage.getItem('userToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: from([cleanTypeName, authLink, errorLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'none',
      notifyOnNetworkStatusChange: true,
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-right">
      <Routes />
    </ToastProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
