import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.flex]}>
      <ScrollView contentContainerStyle={globalStyles.flexGrow}>
        <View style={style.profileImgContainer}>
          <View style={style.profileImgContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.profileImg}
            />
          </View>
        </View>
        <Text style={style.userName}>Emma Roberts</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>101</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
