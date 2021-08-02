import {useState} from 'react';

const useAlbumSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerVlaue, setPickerValue] = useState(null);

  const albumFilter = items => {
    return pickerVlaue === null
      ? items
      : items.filter(item => {
          return item.albumId === pickerVlaue;
        });
  };

  return {
    modalVisible,
    setModalVisible,
    pickerVlaue,
    setPickerValue,
    albumFilter,
  };
};

export default useAlbumSelector;
