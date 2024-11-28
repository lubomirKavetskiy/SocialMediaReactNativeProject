import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';

import userStories from './assets/data/userStories';

import globalStyle from './assets/styles/globalStyle';

const userStoriesPageSize = 4;

const paginate = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return startIndex >= data.length ? [] : data.slice(startIndex, endIndex);
};

function App() {
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  useEffect(() => {
    setIsLoadingUserStories(true);

    const initialUserStories = paginate(userStories, 1, userStoriesPageSize);

    setUserStoriesRenderedData(initialUserStories);
    setIsLoadingUserStories(false);
  }, []);

  const handleLoadMore = () => {
    if (isLoadingUserStories) return;

    setIsLoadingUserStories(true);

    const contentToAppend = paginate(
      userStories,
      userStoriesCurrentPage + 1,
      userStoriesPageSize,
    );

    if (contentToAppend.length > 0) {
      setUserStoriesCurrentPage(prevPage => prevPage + 1);
      setUserStoriesRenderedData(prevData => [...prevData, ...contentToAppend]);
    }

    setIsLoadingUserStories(false);
  };

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#898DAE" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
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
    </SafeAreaView>
  );
}

export default App;
