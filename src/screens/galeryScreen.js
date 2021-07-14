import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppState} from '@react-native-community/hooks';
import {useNavigation} from '@react-navigation/native';

const GaleryScreen = () => {
  const appState = useAppState();
  const navigation = useNavigation();
  useEffect(() => {
    if (appState === 'background') {
      navigation.navigate('Auth');
    }
  }, [appState, navigation]);
  return (
    <View>
      <Text>Galery</Text>
    </View>
  );
};

export default GaleryScreen;
