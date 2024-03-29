import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import {useAuth} from '../contexts/auth';
import { ActivityIndicator, View } from 'react-native';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();
  if (loading) {
    return (
      <View style={{ backgroundColor:"white" ,flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666777" />
      </View>
    );
  }
  return signed ? <AppRoutes/>:<AuthRoutes /> 
}

export default Routes;