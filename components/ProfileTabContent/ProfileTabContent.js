import React from 'react';
import {ScrollView, Image, View} from 'react-native';

import style from './style';

const IMAGE_COUNT = 12;

const ProfileTabContent = () => {
  return (
    <ScrollView style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        {Array.from({length: IMAGE_COUNT}).map((_, idx) => (
          <Image
            key={idx}
            resizeMode="contain"
            style={style.image}
            source={require('../../assets/images/default_post.png')}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
