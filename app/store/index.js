import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import saga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware)
];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Prevent recomputing reducers for `replaceReducer`
    shouldHotReload: true
  })
  : compose;

const store = createStore(
  rootReducer,
  composeEnhancer(...enhancers),
);

sagaMiddleware.run(saga);

export default store;
