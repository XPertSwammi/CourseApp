import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import style from '../../styles/style';

const Button = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={() => onSubmit()} style={style.btnSubmit}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
