import React from 'react';
import {View, Text, Platform, UIManager} from 'react-native';
import style from '../../styles/style';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const SubInfo = props => {
  const {postcode, email, address, city} = props;

  return (
    <>
      <View style={style.subInfo}>
        <Text style={style.subInfoTitle}>ADDRESS</Text>
        <Text style={style.subInfotext}>{`${postcode}, ${city},`}</Text>
        <Text style={style.subInfotext}>{address}</Text>
      </View>
      <View style={style.subInfo}>
        <Text style={style.subInfoTitle}>MAIL</Text>
        <Text style={style.subInfotext}>{email}</Text>
      </View>
    </>
  );
};

export default SubInfo;
