import React from 'react';
import {View} from 'react-native';
import style from '../../styles/style';
import TabItem from '../tab-item/teb-item';

const BottomTab = ({navigation}) => {
  return (
    <View style={style.bottomTab}>
      <TabItem label="contacts" linkName="Contacts" navigation={navigation} />
      <TabItem label="galery" linkName="Galery" navigation={navigation} />
    </View>
  );
};

export default BottomTab;
