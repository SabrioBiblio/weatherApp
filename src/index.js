import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/Jost-Regular.woff2'
import { createStore, applyMiddleware } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import reducer from './reducers/reducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(

  <React.StrictMode>
    <StoreProvider store={store}>
    <App/>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);