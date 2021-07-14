import React from 'react';
import {Text} from 'react-native';
import style from '../../styles/style';

const TabItem = ({label, linkName, navigation}) => {
  return (
    <Text
      style={style.bottomTabText}
      onPress={() => navigation.navigate(linkName)}>
      {label.toUpperCase()}
    </Text>
  );
};

export default TabItem;
