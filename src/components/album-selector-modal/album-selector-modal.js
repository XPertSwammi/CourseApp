import React from 'react';
import {Modal, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const pickerArr = [
  {
    label: 'Album one',
    value: 1,
  },
  {
    label: 'Album two',
    value: 2,
  },
  {
    label: 'Album three',
    value: 3,
  },
  {
    label: 'Album four',
    value: 4,
  },
];
const AlbumSelectorModal = ({
  modalVisible,
  setModalVisible,
  pickerVlaue,
  setPickerValue,
  setPage,
}) => {
  const onValueChange = value => {
    setPage(value * 5 - 4);
    setPickerValue(value);
    setModalVisible(false);
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Picker
          selectedValue={pickerVlaue}
          onValueChange={value => onValueChange(value)}>
          {pickerArr.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
      </View>
    </Modal>
  );
};

export default AlbumSelectorModal;
