import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//redux persist step 1
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';


const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export  { store, persistor };