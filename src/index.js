import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga'
import { watcherSaga } from './sagas'

import App from './components/app';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
let store = createStore(reducers, 
            compose(applyMiddleware(sagaMiddleware), reduxDevTools));

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();