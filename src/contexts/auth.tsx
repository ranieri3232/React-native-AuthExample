import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from '../services/auth';

interface User{
  name: string;
  email: string;
}
interface AuthContextData{
  signed: boolean;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
  user: User | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadStorageData(){
      const storagedUser = await AsyncStorage.getItem('@AuthRN:user');
      const storagedToken = await AsyncStorage.getItem('@AuthRN:token');
      if(storagedToken && storagedUser){
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(){
    const response = await auth.signIn();
    setUser(response.user);

    await AsyncStorage.setItem('@AuthRN:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AuthRN:token', response.token);
  }
  async function signOut(){
    await AsyncStorage.clear();
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{signed: !!user, signIn, signOut, user, loading}}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;

}

export {AuthProvider, useAuth};