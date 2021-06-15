import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {useAuth} from '../contexts/auth';


const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();
  function handleSignOut(){
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {user?.name}
      </Text>
      <Text style={styles.text}>
        Dashboard!
      </Text>
      <Button onPress={handleSignOut} title="SignOut"></Button>
  </View> 
  );
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 32,
    color: 'black',
    paddingBottom: 20,
  }
});
export default Dashboard;