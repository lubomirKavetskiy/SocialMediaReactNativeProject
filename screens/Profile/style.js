import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImgContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(32),
    justifyContent: 'center',
  },
  profileImg: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImgContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: horizontalScale(110),
    padding: horizontalScale(4),
  },
  userName: {
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Inter', 600),
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(28),
    marginHorizontal: horizontalScale(40),
    borderBottomWidth: 1,
    borderBottomColor: '#E9EFF9',
  },
  statBorder: {
    borderRightWidth: 1,
    borderRightColor: '#E9EFF9',
  },
  statAmount: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', 600),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', 400),
    color: '#79869F',
    textAlign: 'center',
  },
});

export default style;
