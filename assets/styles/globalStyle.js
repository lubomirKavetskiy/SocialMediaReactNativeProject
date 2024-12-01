import {StyleSheet} from 'react-native';

import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 12, backgroundColor: '#F9FAFB', borderRadius: 100},
  messageNumberContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#F35BAC',
    borderRadius: 100,
    width: 12,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 8,
    fontFamily: getFontFamily('Inter', 600),
  },
  userStoryContainer: {
    marginTop: 12,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});

export default globalStyle;
