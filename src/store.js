import { createStore } from 'redux';
import { persistStore, persistRedux } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet
};

const pReducer = persistRedux(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
