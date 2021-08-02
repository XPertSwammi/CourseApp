import React, {useState, useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import style from '../styles/style';
import ContactList from '../components/contact-list/contact-list';
import BottomTab from '../components/bottom-tab/bottom-tab';
import SearchPanel from '../components/search-panel/serch-panel';
import FilterModal from '../components/filter-modal/filter-modal';
import ContactItemDetailModal from '../components/contact-item-detail-modal/contact-item-detail-modal';
import {ServiseContext} from '../hooks/context';
import useMainService from '../hooks/useMainService';
import useContactFilter from '../hooks/useContactsFilter';
import useTermFilter from '../hooks/useTermFilter';
import useModalWithSwipe from '../hooks/useModalWithSwipe';

const Contacts = ({navigation}) => {
  const service = useContext(ServiseContext);
  const {state, loadMore} = useMainService(service.getPeople);
  const {cities, cityFilter, clearFilter, setSelectedCity, selectedCity} =
    useContactFilter(state.results);
  const {term, setTerm, termFilter} = useTermFilter(state.results);
  const [modalVisible, setModalVisible] = useState(false);
  const {
    modalVisible: itemDetailModalVisible,
    setModalVisible: setItemDetailModalVisible,
    itemId,
    getItemId,
    onSwipeLeft,
    onSwipeRight,
  } = useModalWithSwipe(state.results);
  const {isError, results, isLoading} = state;
  const visibleItems = cityFilter(termFilter());

  const content = isError ? (
    <Text>Error</Text>
  ) : (
    <ContactList
      data={visibleItems}
      loadMore={loadMore}
      isLoading={isLoading}
      term={term}
      selectedCity={selectedCity}
      setItemDetailModalVisible={setItemDetailModalVisible}
      getItemId={getItemId}
    />
  );

  return (
    <>
      <SafeAreaView style={style.container}>
        <SearchPanel
          term={term}
          setTerm={setTerm}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View>{content}</View>
        <BottomTab navigation={navigation} />
      </SafeAreaView>
      {isLoading ? null : (
        <>
          <ContactItemDetailModal
            itemDetailModalVisible={itemDetailModalVisible}
            setItemDetailModalVisible={setItemDetailModalVisible}
            item={results[itemId]}
            resultsLength={results.length}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
          />
          <FilterModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setSelectedCity={setSelectedCity}
            selectedCity={selectedCity}
            cities={cities}
            clearFilter={clearFilter}
          />
        </>
      )}
    </>
  );
};

export default Contacts;
