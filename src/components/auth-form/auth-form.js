import React, {useContext, useState} from 'react';
import {TextInput, View} from 'react-native';
import style from '../../styles/style';
import {AuthContext, AuthStateContext} from '../../hooks/context';
import FailureIndicator from '../failure-indicator/failure-indicator';
import Button from '../button/button';

const AuthForm = () => {
  const {signIn} = useContext(AuthContext);
  const {authFailure} = useContext(AuthStateContext);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [animIndicator, setAnimIndicator] = useState(false);

  const onSubmit = () => {
    signIn(userName.toLowerCase(), password.toLowerCase());
    setAnimIndicator(!animIndicator);
  };

  return (
    <View style={style.formContainer}>
      {authFailure && <FailureIndicator animIndicator={animIndicator} />}
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
      <Button label="Submit" onSubmit={onSubmit} />
    </View>
  );
};

export default AuthForm;
