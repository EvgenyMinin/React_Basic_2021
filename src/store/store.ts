import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/UserService';
import postReducer from './reducers/PostSlice';

const rootReduce = combineReducers({
  postReducer,
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
