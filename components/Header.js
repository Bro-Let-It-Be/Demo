import React from 'react';

import {StyleSheet} from 'react-native';

import {Appbar} from 'react-native-paper';

const Header = () => {
  const _handleSearch = () => alert('Searching');

  const _handleMore = () => alert('Shown more');

  return (
    <Appbar.Header style={{backgroundColor: '#fff'}}>
      <Appbar.Content title="Amazon Kindle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
});

export default Header;
