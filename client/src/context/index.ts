import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextProps {
  isAuth: boolean,
  isLoading: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<Partial<ContextProps>>({});
