import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

import UserProfileImage from '../UserProfileImage/UserProfileImage';

import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import style from './style';

const UserPost = ({
  firstName,
  lastName,
  location,
  comments,
  likes,
  bookmarks,
  image,
  profileImage,
}) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>{`${firstName} ${lastName}`}</Text>
            {location && <Text style={style.userLocation}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={scaleFontSize(24)}
          color="#79869F"
        />
      </View>
      <View>
        <Image source={image} style={style.userImage} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatBtn}>
          <FontAwesomeIcon
            icon={faHeart}
            size={scaleFontSize(16)}
            color="#79869F"
          />
          <Text style={style.userPostStatText}>{likes}</Text>
        </View>
        <View style={style.userPostStatBtn}>
          <FontAwesomeIcon
            icon={faComment}
            size={scaleFontSize(16)}
            color="#79869F"
          />
          <Text style={style.userPostStatText}>{comments}</Text>
        </View>
        <View style={style.userPostStatBtn}>
          <FontAwesomeIcon
            icon={faBookmark}
            size={scaleFontSize(16)}
            color="#79869F"
          />
          <Text style={style.userPostStatText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserPost;
