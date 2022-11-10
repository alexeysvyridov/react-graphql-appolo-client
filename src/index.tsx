import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpLink = createHttpLink({
  uri: 'http://localhost:6969/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>  
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
