import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ContactStackScreen from './contact-stack-screen';
import {AuthContext, AuthStateContext} from '../hooks/context';
import useAuth from '../hooks/useAuth';
import {useAppState} from '@react-native-community/hooks';

const RootStack = createStackNavigator();

const Navigation = () => {
  const [authContext, authState] = useAuth();
  const appState = useAppState();
  console.log(authState);

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
            <RootStack.Screen
              name="contactAndAuth"
              component={ContactStackScreen}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthStateContext.Provider>
    </AuthContext.Provider>
  );
};

export default Navigation;
