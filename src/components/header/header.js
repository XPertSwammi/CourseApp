import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import style from '../../styles/style';

const Header = ({scene, navigation}) => {
  const {options} = scene.descriptor;
  const [canBack, setCanBack] = useState(null);

  useEffect(() => {
    setCanBack(navigation.canGoBack());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={style.header}>
      {canBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/img/back-arrow.png')}
            style={style.arrow}
          />
        </TouchableOpacity>
      )}

      <Text style={style.screenTitle}>{options.title}</Text>
    </SafeAreaView>
  );
};

export default Header;
