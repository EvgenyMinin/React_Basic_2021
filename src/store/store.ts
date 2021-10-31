import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/PostSlice';

const rootReduce = combineReducers({
  postReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduce,
  });
};

export type RootState = ReturnType<typeof rootReduce>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
