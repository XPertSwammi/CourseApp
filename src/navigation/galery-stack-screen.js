import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import GaleryScreen from '../screens/galeryScreen';
import Header from '../components/header/header';

const GaleryStack = createStackNavigator();

const GaleryStackSreen = () => {
  return (
    <GaleryStack.Navigator
      headerMode="none"
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <GaleryStack.Screen
        name="Galery"
        component={GaleryScreen}
        options={{title: 'Galery'}}
      />
    </GaleryStack.Navigator>
  );
};

export default GaleryStackSreen;
