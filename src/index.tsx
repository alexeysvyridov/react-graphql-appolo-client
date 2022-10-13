import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Rounter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: 'http://localhost:6969/graphql',
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Rounter>
        <App />
      </Rounter>
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
