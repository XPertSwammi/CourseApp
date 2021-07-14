import React, {useEffect} from 'react';
import {View, Text, LayoutAnimation, Platform, UIManager} from 'react-native';
import style from '../../styles/style';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const FailureIndicator = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  return (
    <View style={style.failureContainer}>
      <Text>Incorrect Login or Password</Text>
    </View>
  );
};

export default FailureIndicator;
