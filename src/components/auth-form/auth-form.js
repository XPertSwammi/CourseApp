import React, {useContext, useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import style from '../../styles/style';
import {AuthContext, AuthStateContext} from '../../hooks/context';
import FailureIndicator from '../failure-indicator/failure-indicator';
import {useNavigation} from '@react-navigation/native';

const AuthForm = () => {
  const {signIn} = useContext(AuthContext);
  const {authFailure} = useContext(AuthStateContext);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onSubmit = () => {
    signIn(userName.toLowerCase(), password.toLowerCase()).then(token => {
      if (token !== null) {
        navigation.navigate('Galery');
      }
    });
  };

  return (
    <View style={style.formContainer}>
      {authFailure && <FailureIndicator />}
      <TextInput
        placeholder="Enter your Login"
        style={style.input}
        value={userName}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Enter your Password"
        style={style.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={() => onSubmit()}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
