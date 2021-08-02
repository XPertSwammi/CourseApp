import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const GalleryItem = ({data, setItemDetailModalVisible, getItemIndex}) => {
  const {id, url, title, albumId} = data;

  const onPress = () => {
    getItemIndex(id);
    setItemDetailModalVisible(true);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.cardBox}>
        <Image style={style.image} source={{uri: url}} />
        <View style={style.bottomBox}>
          <View style={style.textBox}>
            <Text>{title}</Text>
          </View>
          <Text style={style.text}>{`ALBUM ${albumId}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardBox: {
    padding: 20,
    borderColor: 'gray',
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 120,
  },
  bottomBox: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    width: '80%',
  },
  text: {
    color: '#00ADD3',
    fontWeight: 'bold',
  },
});
export default GalleryItem;
