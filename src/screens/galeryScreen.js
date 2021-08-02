import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import style from '../styles/style';
import {ServiseContext} from '../hooks/context';
import useMainService from '../hooks/useMainService';
import GalleryList from '../components/gallery-list/gallery-list';
import AlbumSelector from '../components/album-selector/album-slector';
import useAlbumSelector from '../hooks/useAlbumSelector';
import AlbumSelectorModal from '../components/album-selector-modal/album-selector-modal';
import useModalWithSwipe from '../hooks/useModalWithSwipe';
import GalleryItemDeatilModal from '../components/gallery-item-detail-modal/gallery-item-detail-modal';
const GaleryScreen = () => {
  const service = useContext(ServiseContext);
  const {state, loadMore, setPage} = useMainService(service.getImages);
  const {
    modalVisible,
    setModalVisible,
    pickerVlaue,
    setPickerValue,
    albumFilter,
  } = useAlbumSelector();
  const {
    modalVisible: itemDetailModalVisible,
    setModalVisible: setItemDetailModalVisible,
    itemId,
    onSwipeLeft,
    onSwipeRight,
    getItemIndex,
  } = useModalWithSwipe(state.results);

  const visibleItems = albumFilter(state.results);

  return (
    <>
      <SafeAreaView style={style.container}>
        <AlbumSelector
          albumId={pickerVlaue === null ? '' : pickerVlaue}
          setModalVisible={setModalVisible}
        />
        <GalleryList
          data={visibleItems}
          isLoading={state.isLoading}
          loadMore={loadMore}
          setItemDetailModalVisible={setItemDetailModalVisible}
          getItemIndex={getItemIndex}
        />
      </SafeAreaView>
      {state.isLoading ? null : (
        <>
          <AlbumSelectorModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            pickerVlaue={pickerVlaue}
            setPickerValue={setPickerValue}
            setPage={setPage}
          />
          <GalleryItemDeatilModal
            itemDetailModalVisible={itemDetailModalVisible}
            setItemDetailModalVisible={setItemDetailModalVisible}
            item={state.results[itemId]}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
          />
        </>
      )}
    </>
  );
};

export default GaleryScreen;
