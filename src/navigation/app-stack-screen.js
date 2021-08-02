import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Contacts from '../screens/contacts';
import Header from '../components/header/header';
import GaleryStackSreen from './galery-stack-screen';

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      headerMode="screen"
      screenOptions={{
        header: props => <Header {...props} />,
      }}
      initialRouteName="Contacts">
      <AppStack.Screen
        component={Contacts}
        name="Contacts"
        options={{title: 'Contacts'}}
      />
      <AppStack.Screen
        component={GaleryStackSreen}
        name="Galery"
        options={{title: 'Gallery'}}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
