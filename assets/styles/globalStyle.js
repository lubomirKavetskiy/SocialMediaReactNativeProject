import {StyleSheet} from 'react-native';

import {getFontFamily} from '../fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: verticalScale(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(12),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(32),
  },
  messageNumberContainer: {
    position: 'absolute',
    top: verticalScale(12),
    right: horizontalScale(8),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(12),
    width: horizontalScale(12),
    height: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(8),
    fontFamily: getFontFamily('Inter', 600),
  },
  userStoryContainer: {
    marginTop: verticalScale(12),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default globalStyle;
