import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const ProfileTabTitle = ({title, isFocused}) => {
  return (
    <Text style={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
