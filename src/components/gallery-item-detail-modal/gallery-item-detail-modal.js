import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import GestureRecognizer from 'react-native-swipe-gestures';

const config = {
  velocityThreshold: 0.1,
  directionalOffsetThreshold: 80,
};

const GalleryItemDeatilModal = ({
  item,
  itemDetailModalVisible,
  setItemDetailModalVisible,
  onSwipeRight,
  onSwipeLeft,
}) => {
  const {url, title} = item;
  return (
    <GestureRecognizer
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      config={config}>
      <Modal
        animationType="slide"
        visible={itemDetailModalVisible}
        transparent={true}
        onRequestClose={() => setItemDetailModalVisible(false)}>
        <SafeAreaView style={style.container}>
          <View style={style.btnContainer}>
            <TouchableOpacity onPress={() => setItemDetailModalVisible(false)}>
              <FontAwesomeIcon icon={faTimes} color="#00ADD3" size={35} />
            </TouchableOpacity>
          </View>
          <View style={style.card}>
            <View>
              <Image style={style.image} source={{uri: url}} />
            </View>
            <View>
              <Text>{title}</Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </GestureRecognizer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnContainer: {
    alignItems: 'flex-end',
    right: 15,
    top: 15,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default GalleryItemDeatilModal;
