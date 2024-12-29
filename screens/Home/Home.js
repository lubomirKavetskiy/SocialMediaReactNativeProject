import React, {useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import Title from '../../components/Title/Title';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';

import userStories from '../../assets/data/userStories';
import userPosts from '../../assets/data/userPosts';

import useGetRenderedData from '../../hooks/useGetRenderedData';

import {scaleFontSize} from '../../assets/styles/scaling';

import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import {Routes} from '../../navigation/Routes';

const userStoriesPageSize = 4;
const initialUserStoriesCurrentPage = 1;

const userPostsPageSize = 3;
const initialUserPostsCurrentPage = 1;

const Home = ({navigation}) => {
  const {
    userRenderedData: userStoriesRenderedData,
    handleLoadMoreData: handleLoadMoreStories,
  } = useGetRenderedData({
    initialUserDataCurrentPage: initialUserStoriesCurrentPage,
    userDataPageSize: userStoriesPageSize,
    userData: userStories,
  });

  const {
    userRenderedData: userPostsRenderedData,
    handleLoadMoreData: handleLoadMorePosts,
  } = useGetRenderedData({
    initialUserDataCurrentPage: initialUserPostsCurrentPage,
    userDataPageSize: userPostsPageSize,
    userData: userPosts,
  });

  useEffect(() => {
    Dimensions.addEventListener('change', ({screen}) => {
      console.log(screen);
    });
  });

  return (
    <SafeAreaView style={globalStyles.backgroundWhite}>
      <StatusBar />
      <View style={style.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity
                  style={style.messageIcon}
                  onPress={() => navigation.navigate(Routes.Profile)}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color="#898DAE"
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  onEndReachedThreshold={0.5}
                  onEndReached={handleLoadMoreStories}
                  data={userStoriesRenderedData}
                  renderItem={({item: {id, firstName, profileImage}}) => (
                    <UserStory
                      key={id}
                      firstName={firstName}
                      profileImage={profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMorePosts}
          renderItem={({
            item: {
              id,
              firstName,
              lastName,
              location,
              image,
              comments,
              likes,
              bookmarks,
              profileImage,
            },
          }) => (
            <UserPost
              key={id}
              firstName={firstName}
              lastName={lastName}
              location={location}
              image={image}
              comments={comments}
              likes={likes}
              bookmarks={bookmarks}
              profileImage={profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
