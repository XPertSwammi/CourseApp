import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import RNPickerSelect from 'react-native-picker-select';

const items = [
  {label: 'Kazan', value: 'Kazan'},
  {label: 'St Petersburg', value: 'St Petersburg'},
  {label: 'Moscow', value: 'Moscow'},
];
const ModalFilterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.modalContainer}>
      <View style={style.btnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="#00ADD3" size={35} />
        </TouchableOpacity>
      </View>
      <View style={style.dropDownContainer}>
        <RNPickerSelect
          items={items}
          onValueChange={value => setCity(value)}
          style={{
            inputAndroid: {
              color: 'black',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnContainer: {
    alignItems: 'flex-end',
    right: 15,
    top: 15,
  },
  dropDownContainer: {
    marginTop: 20,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
  },
});
export default ModalFilterScreen;
