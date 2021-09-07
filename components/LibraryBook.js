import React from 'react';

import {View, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import BookDetails from './BookDetails';

const LibraryBook = props => {
  const navigation = useNavigation();

  const navigateFunction = () => {
    navigation.navigate('Detail', {data: props.data});
  };

  return (
    <TouchableRipple onPress={() => navigateFunction()}>
      <View style={styles.item}>
        <BookDetails data={props.data} />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.4,
    borderColor: '#BBC4C2',
    borderRadius: 10,
    backgroundColor:'#fff',
  },
});

export default LibraryBook;
