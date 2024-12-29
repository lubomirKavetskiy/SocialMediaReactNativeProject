import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: 'blue'}}>Go Back</Text>
      </TouchableOpacity>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
