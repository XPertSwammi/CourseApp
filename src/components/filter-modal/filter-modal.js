import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import RNPickerSelect from 'react-native-picker-select';
import Button from '../button/button';

const FilterModal = ({
  modalVisible,
  setModalVisible,
  selectedCity,
  setSelectedCity,
  cities,
  clearFilter,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <SafeAreaView style={style.modalContainer}>
        <View style={style.btnContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <FontAwesomeIcon icon={faTimes} color="#00ADD3" size={35} />
          </TouchableOpacity>
        </View>
        <View style={style.dropDownContainer}>
          <RNPickerSelect
            items={cities}
            onValueChange={value => setSelectedCity(value)}
            style={{
              inputAndroid: {
                color: 'black',
              },
            }}
            value={selectedCity}
          />
        </View>
        <View>
          <Button label="Clear" onSubmit={clearFilter} />
        </View>
      </SafeAreaView>
    </Modal>
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

export default FilterModal;
