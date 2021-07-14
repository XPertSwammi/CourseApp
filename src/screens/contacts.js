import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import style from '../styles/style';
import useService from '../hooks/useService';
import ContactList from '../components/contact-list/contact-list';
import BottomTab from '../components/bottom-tab/bottom-tab';

const Contacts = ({navigation}) => {
  const [data, loadMore] = useService();
  const {isError} = data;

  const content = isError ? (
    <Text>Error</Text>
  ) : (
    <ContactList data={data} loadMore={loadMore} />
  );

  return (
    <SafeAreaView style={style.container}>
      <View>{content}</View>
      <BottomTab navigation={navigation} />
    </SafeAreaView>
  );
};

export default Contacts;
