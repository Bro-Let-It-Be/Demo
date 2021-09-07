import React from 'react';

import {StyleSheet, SafeAreaView, View} from 'react-native';

import Header from './Header';
import Factory from '../utility/Factory';

const List = props => {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Factory data={props.data} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 110,
  },
});

export default List;
