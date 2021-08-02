import React from 'react';
import {FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import ContactItem from '../contact-item/contact-item';

const ContactList = ({
  data,
  loadMore,
  isLoading,
  term,
  selectedCity,
  setItemDetailModalVisible,
  getItemId,
}) => {
  const rendreFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="00ADD3" /> : null;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ContactItem
            data={item}
            setItemDetailModalVisible={setItemDetailModalVisible}
            getItemId={getItemId}
          />
        )}
        onEndReached={
          term.length || (selectedCity !== null) > 0 ? null : loadMore
        }
        keyExtractor={item => item.id}
        onEndReachedThreshold={0}
        ListFooterComponent={() => rendreFooter()}
      />
    </SafeAreaView>
  );
};

export default ContactList;
