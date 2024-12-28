import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
  Switch,
  Platform,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

import userStories from './assets/data/userStories';
import userPosts from './assets/data/userPosts';

import useGetRenderedData from './hooks/useGetRenderedData';

import globalStyle from './assets/styles/globalStyle';
import {scaleFontSize} from './assets/styles/scaling';

const userStoriesPageSize = 4;
const initialUserStoriesCurrentPage = 1;

const userPostsPageSize = 3;
const initialUserPostsCurrentPage = 1;

const App = () => {
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

  const [isOpen, setIsOpen] = useState(false);
  console.log(Platform);
  return (
    <SafeAreaView>
      <View style={globalStyle.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color="#898DAE"
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Switch
                  style={
                    Platform.OS === 'android'
                      ? {transform: [{scaleX: 1.5}, {scaleY: 1.5}]}
                      : {}
                  }
                  trackColor={
                    Platform.OS === 'android' && {
                      false: '#767577',
                      true: '#81b0ff',
                    }
                  }
                  ios_backgroundColor={isOpen ? 'green' : 'red'}
                  value={isOpen}
                  onValueChange={value => setIsOpen(value)}
                />
              </View>
              <View style={globalStyle.userStoryContainer}>
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

export default App;
