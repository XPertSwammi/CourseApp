import {StyleSheet} from 'react-native';
const mainTextColor = '#00ADD3';
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontSize: 30,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(229, 229, 229, 0.25)',
    borderRadius: 15,
    paddingTop: 18,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 18,
    marginTop: 10,
  },
  contactImage: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: mainTextColor,
    borderRadius: 40,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 40,
    borderColor: mainTextColor,
  },
  contactName: {
    fontSize: 25,
    color: mainTextColor,
  },
  contactInfo: {
    marginLeft: 20,
  },
  contactPhone: {
    fontSize: 16,
    color: mainTextColor,
  },
  subInfo: {
    marginTop: 15,
  },
  subInfoTitle: {
    color: mainTextColor,
    fontSize: 11,
  },
  subInfotext: {
    fontSize: 12,
  },
  bottomTab: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  bottomTabText: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: 25,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    borderColor: '#C0C1C1',
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  header: {
    height: 70,
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingTop: 15,
    flexDirection: 'row',
  },
  arrow: {
    marginRight: 15,
  },
  failureContainer: {
    borderColor: 'tomato',
    borderRadius: 15,
    borderWidth: 3,
    padding: 10,
    width: '100%',
    top: -20,
  },
  btnSubmit: {
    marginTop: 10,
    padding: 15,
    backgroundColor: mainTextColor,
    borderRadius: 15,
  },
});

export default style;
