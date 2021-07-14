import React from 'react';
import {FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import ContactItem from '../contact-item/contact-item';

const ContactList = ({data, loadMore}) => {
  const {results, isLoading} = data;

  const rendreFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="00ADD3" /> : null;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={results}
        renderItem={({item}) => <ContactItem data={item} />}
        keyExtractor={item => item.id}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0}
        ListFooterComponent={() => rendreFooter()}
      />
    </SafeAreaView>
  );
};

export default ContactList;
