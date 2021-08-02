import {useState} from 'react';

const useModalWithSwipe = arr => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState(0);

  const onSwipeRight = () => {
    if (itemId > 0) {
      setItemId(prev => {
        return prev - 1;
      });
    }
  };

  const onSwipeLeft = () => {
    if (itemId < arr.length - 1) {
      setItemId(prev => {
        return prev + 1;
      });
    }
  };

  const getItemId = name => {
    const id = arr.findIndex(item => {
      return item.id === name;
    });
    setItemId(id);
  };

  const getItemIndex = id => {
    const idx = arr.findIndex(item => {
      return item.id === id;
    });
    setItemId(idx);
  };
  return {
    modalVisible,
    setModalVisible,
    itemId,
    setItemId,
    getItemId,
    onSwipeLeft,
    onSwipeRight,
    getItemIndex,
  };
};

export default useModalWithSwipe;
