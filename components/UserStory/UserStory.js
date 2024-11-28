import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import UserProfileImage from '../UserProfileImage/UserProfileImage';

import style from './style';

const UserStory = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
