import React, {useRef, useEffect} from 'react';
import {Text} from 'react-native';
import style from '../../styles/style';
import * as Animatable from 'react-native-animatable';

const FailureIndicator = ({animIndicator}) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.animate('bounceIn', 1000);
  }, [animIndicator]);
  return (
    <Animatable.View ref={ref} style={style.failureContainer}>
      <Text>Incorrect Login or Password</Text>
    </Animatable.View>
  );
};

export default FailureIndicator;
