import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/UserService';
import postReducer from './reducers/PostSlice';
import statusReducer from './reducers/StatusSlice';

const rootReduce = combineReducers({
  postReducer,
  statusReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduce,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(userApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduce>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
