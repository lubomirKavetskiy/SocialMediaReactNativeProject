import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: 12,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {justifyContent: 'center', marginLeft: 12},
  userName: {
    fontFamily: getFontFamily('Inter', 500),
    fontSize: 16,
    color: '#000',
  },
  userLocation: {
    fontFamily: getFontFamily('Inter', 400),
    fontSize: 12,
    color: '#79869F',
    marginTop: 4,
  },
  userImage: {
    alignItems: 'center',
    marginVertical: 12,
  },
  userPostStats: {
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  userPostStatBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  userPostStatText: {
    fontFamily: getFontFamily('Inter', 400),
    fontSize: 12,
    color: '#79869F',
    marginLeft: 4,
  },
});

export default style;
