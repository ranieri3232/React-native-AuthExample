import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import {useAuth} from '../contexts/auth';


const SignIn: React.FC = () => {

  const { signed, signIn } = useAuth();

  console.log(signed);

  async function handleSign(){
    signIn();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        SignIn!
      </Text>
      <Button title="Sign In" onPress={handleSign} />
    </View> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 32,
    color: 'black',
    paddingBottom: 30,
  }
});
export default SignIn;