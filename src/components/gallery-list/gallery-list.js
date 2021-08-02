import React from 'react';
import {FlatList, ActivityIndicator, View, Text} from 'react-native';
import GalleryItem from '../gallery-item/gallery-item';

const GalleryList = ({
  data,
  isLoading,
  loadMore,
  setItemDetailModalVisible,
  getItemIndex,
}) => {
  const rendreFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="00ADD3" /> : null;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <GalleryItem
              data={item}
              setItemDetailModalVisible={setItemDetailModalVisible}
              getItemIndex={getItemIndex}
            />
          );
        }}
        ListFooterComponent={() => rendreFooter()}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default GalleryList;
