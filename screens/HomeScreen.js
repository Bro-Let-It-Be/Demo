import React from 'react';
import {StyleSheet} from 'react-native';

import {BottomNavigation} from 'react-native-paper';

import Library from './Library';
import StoreScreen from './StoreScreen';
import Profile from './Profile';

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'library', title: 'Library', icon: 'library'},
    {key: 'store', title: 'Store', icon: 'store'},
    {key: 'profile', title: 'Profile', icon: 'human-greeting'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    library: Library,
    store: StoreScreen,
    profile: Profile,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: '#fff'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
