import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(32),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: verticalScale(12),
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(12),
  },
  userName: {
    fontFamily: getFontFamily('Inter', 500),
    fontSize: scaleFontSize(16),
    color: '#000',
  },
  userLocation: {
    fontFamily: getFontFamily('Inter', 400),
    fontSize: scaleFontSize(12),
    color: '#79869F',
    marginTop: verticalScale(4),
  },
  userImage: {
    alignItems: 'center',
    marginVertical: verticalScale(12),
  },
  userPostStats: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(12),
  },
  userPostStatBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(24),
  },
  userPostStatText: {
    fontFamily: getFontFamily('Inter', 400),
    fontSize: scaleFontSize(12),
    color: '#79869F',
    marginLeft: horizontalScale(4),
  },
});

export default style;
