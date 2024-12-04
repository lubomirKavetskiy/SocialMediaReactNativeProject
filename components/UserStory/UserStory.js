import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import UserProfileImage from '../UserProfileImage/UserProfileImage';

import {horizontalScale} from '../../assets/styles/scaling';
import style from './style';

const UserStory = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimensions={horizontalScale(64)}
      />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
