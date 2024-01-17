import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

//reducers
import rootReducer from '@/app/rootReducer';
import rootService, { apiMiddlewares } from '@/app/rootService';

import { postApi } from '@/features/post/postService';

const reducers = combineReducers(rootReducer);

export default function configureAppStore(initialState = {}) {
  const store = configureStore({
    reducer: { ...reducers, ...rootService },
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiMiddlewares),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
}
