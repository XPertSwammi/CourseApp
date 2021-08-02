import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AlbumSelector = ({albumId, setModalVisible}) => {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={style.box}>
        <Text style={style.text}>{`Select album ${albumId}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  text: {
    color: '#00ADD3',
    fontWeight: 'bold',
    fontSize: 25,
  },
  box: {
    alignItems: 'flex-end',
  },
});
export default AlbumSelector;
