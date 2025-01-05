import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#fff',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(144),
    height: verticalScale(80),
    marginTop: verticalScale(12),
  },
});

export default styles;
