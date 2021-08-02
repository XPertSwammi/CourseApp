import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAlignJustify, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const SearchPanel = ({term, setTerm, setModalVisible}) => {
  return (
    <View style={style.spContainer}>
      <TextInput
        placeholder=" Type to search"
        value={term}
        style={style.input}
        onChangeText={text => setTerm(text)}
        clearButtonMode="while-editing" // for ios
      />

      {term.length > 0 && (
        <TouchableOpacity style={style.clearBtn} onPress={() => setTerm('')}>
          <FontAwesomeIcon icon={faTimesCircle} color={'#00ADD3'} size={23} />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesomeIcon icon={faAlignJustify} color={'#00ADD3'} size={42} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  clearBtn: {
    right: 57,
    position: 'absolute',
  },
  input: {
    flex: 1,
    borderRadius: 15,
    borderColor: '#00ADD3',
    borderWidth: 2,
    height: 45,
    paddingHorizontal: 15,
    marginRight: 5,
  },
  spContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SearchPanel;
