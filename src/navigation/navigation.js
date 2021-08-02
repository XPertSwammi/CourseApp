import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext, AuthStateContext} from '../hooks/context';
import useAuth from '../hooks/useAuth';
import {useAppState} from '@react-native-community/hooks';
import AuthScreen from '../screens/authScreen';
import AppStackScreen from './app-stack-screen';
import ModalFilterScreen from '../screens/modalFilterScreen';

const RootStack = createStackNavigator();

const Navigation = () => {
  const [authContext, authState] = useAuth();
  const {token} = authState;
  const appState = useAppState();

  useEffect(() => {
    if (appState === 'background') {
      authContext.signOut();
    }
  }, [appState, authContext]);

  return (
    <AuthContext.Provider value={authContext}>
      <AuthStateContext.Provider value={authState}>
        <NavigationContainer>
          <RootStack.Navigator headerMode="none">
            {token === null ? (
              <RootStack.Screen name="auth" component={AuthScreen} />
            ) : (
              <>
                <RootStack.Screen name="app" component={AppStackScreen} />
                <RootStack.Screen
                  component={ModalFilterScreen}
                  name="ModalFilter"
                  options={{headerShown: false}}
                />
              </>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthStateContext.Provider>
    </AuthContext.Provider>
  );
};

export default Navigation;
