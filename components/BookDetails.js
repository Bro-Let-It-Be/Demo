import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';
import {Caption} from 'react-native-paper';

const BookItem = props => {
  var footdata = '';
  if (props.data.type === 'store') footdata = props.data.price;
  else if (props.data.type === 'lib') footdata = props.data.completed;

  return (
    <View style={styles.container}>
      <View style={styles.bookImage}>
        <Image
          style={styles.image}
          source={{uri: 'asset:/images/' + props.data.uri}}
        />
      </View>
      <View style={styles.bookinfo}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{props.data.title}</Text>
        
        <Caption style={styles.author}>Mr. Raj Singh</Caption>
        <Caption style={styles.caption} numberOfLines={2} ellipsizeMode='tail'>
          Caption of the book and some book related info. Here we will get some
          idea of book.
        </Caption>
        <Text style={styles.footer}>{footdata}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    flexDirection: 'row',
    height: 120,
    backgroundColor:'#fff',
  },
  bookImage: {
    width: 100,
    height: 100,
  },
  bookinfo: {
    height: 100,
    flexShrink: 1,
    paddingRight:5,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius:10
  },
  author: {
    marginLeft: 10,
    marginRight: 10,
  },
  caption: {
    marginLeft: 10,
    marginRight: 10,
  },
  footer: {
    textAlign: 'right',
    paddingRight: 10,
  },
});

export default BookItem;
