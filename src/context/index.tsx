import { ReactNode, useContext, useState } from 'react'
import { createContext } from 'react';
import { getValueFromLocalStorage } from '../helpers';

const defaultValue = {
  user: null,
  token: null,
  onSetUser: (user: User | null) => { },
  onSetToken: (token: null | string) => { },
}
type UserContext = {
  user?: User | null;
  token: null | string;
  onSetUser: (user: User | null) => void;
  onSetToken: (token: string | null) => void;
}
export const AuthContext = createContext<UserContext | null>(defaultValue);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('no provider')
  }
  return context;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(getValueFromLocalStorage<User | null>('user') || null);
  const [token, setToken] = useState<null | string>(null);

  const handleSetUser = (user: User | null) => {
    setUser(user);
  };
  const handleSetToken = (token: string | null) => {
    setToken(token);
  };


  return {
    user,
    token,
    onSetUser: handleSetUser,
    onSetToken: handleSetToken,
  }
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const { 
    user,
    token,
    onSetUser,
    onSetToken,
  } = useAuth();
  return (
    <AuthContext.Provider value={{user, token, onSetToken, onSetUser}}>
      {children}
    </AuthContext.Provider>
  )
}