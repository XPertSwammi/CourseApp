import React from 'react';
import {SafeAreaView} from 'react-native';
import style from '../styles/style';
import AuthForm from '../components/auth-form/auth-form';

const AuthScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <AuthForm />
    </SafeAreaView>
  );
};

export default AuthScreen;
