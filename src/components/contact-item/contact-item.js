import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import style from '../../styles/style';
import SubInfo from '../sub-info/sub-info';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ContactItem = props => {
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    picture,
    postcode,
    city,
    address,
  } = props.data;
  const {setItemDetailModalVisible, getItemId} = props;

  const [isVisible, setIsVisble] = useState(false);

  const press = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsVisble(!isVisible);
  };

  const onImagePress = () => {
    getItemId(id);
    setItemDetailModalVisible(true);
  };

  return (
    <TouchableOpacity onPress={press}>
      <View style={style.card}>
        <TouchableOpacity onPress={onImagePress}>
          <View style={style.imageContainer}>
            <Image style={style.contactImage} source={{uri: picture}} />
          </View>
        </TouchableOpacity>
        <View style={style.contactInfo}>
          <Text style={style.contactName}>{`${firstName} ${lastName}`}</Text>
          <Text style={style.contactPhone}>{`Phone: ${phone}`} </Text>
          {isVisible && (
            <SubInfo
              postcode={postcode}
              email={email}
              city={city}
              address={address}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;
