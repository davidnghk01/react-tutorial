import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import FilmsContainer from './FilmsContainer';
import rootReducer from './reducers';
import mySaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(mySaga);

class App extends Component {

  render() {
    return <Provider store={store}>
      <FilmsContainer/>
    </Provider>
  }
}

export default App;
