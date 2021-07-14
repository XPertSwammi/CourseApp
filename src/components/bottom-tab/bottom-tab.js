import React from 'react';
import {View} from 'react-native';
import style from '../../styles/style';
import TabItem from '../tab-item/teb-item';

const BottomTab = ({navigation}) => {
  return (
    <View style={style.bottomTab}>
      <TabItem label="screen 1" linkName="Contacts" navigation={navigation} />
      <TabItem label="screen 2" linkName="Auth" navigation={navigation} />
    </View>
  );
};

export default BottomTab;
