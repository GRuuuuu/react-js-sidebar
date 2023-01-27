import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Config from './reducers/configReducer';
import NavClick from './reducers/navReducer';

const persistConfig = {
  key: 'root',
  storage, //localstorage에 저장
  whitelist: ['navClick', 'config'], //auth reducer만 localstorage에 저장
};

const rootReducer = combineReducers({
  config: Config,
  navClick: NavClick,
});

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: reducer,
});

export const persistor = persistStore(store);
export default store;