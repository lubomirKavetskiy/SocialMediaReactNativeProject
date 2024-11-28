import {StyleSheet} from 'react-native';

import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginLeft: 27,
    marginTop: 30,
    marginRight: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 14, backgroundColor: '#F9FAFB', borderRadius: 100},
  messageNumberContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 100,
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', 600),
  },
  userStoryContainer: {
    marginTop: 10,
    marginHorizontal: 28,
  },
});

export default globalStyle;
