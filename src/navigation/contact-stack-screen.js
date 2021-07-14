import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Contacts from '../screens/contacts';
import AuthScreen from '../screens/authScreen';
import Header from '../components/header/header';
import GaleryStackSreen from './galery-stack-screen';

const ContactStack = createStackNavigator();

const ContactStackScreen = () => {
  return (
    <ContactStack.Navigator
      headerMode="screen"
      screenOptions={{
        header: props => <Header {...props} />,
      }}
      initialRouteName="Contacts">
      <ContactStack.Screen
        component={Contacts}
        name="Contacts"
        options={{title: 'Contacts'}}
      />
      <ContactStack.Screen
        component={AuthScreen}
        name="Auth"
        options={{title: 'Auth'}}
      />
      <ContactStack.Screen
        component={GaleryStackSreen}
        name="Galery"
        options={{title: 'Galery'}}
      />
    </ContactStack.Navigator>
  );
};

export default ContactStackScreen;
