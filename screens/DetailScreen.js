import React from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {
  Title,
  Subheading,
  Caption,
  Button,
  IconButton,
  Chip,
} from 'react-native-paper';

const DetailScreen = props => {
  const item = props.route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: 'asset:/images/' + item.data.uri}} />
      <Title style={styles.title}>{item.data.title}</Title>
      <View style={styles.content}>
        <View style={{flexDirection: 'row'}}>
          <Chip style={{width: 76, marginRight: 5}} mode="outlined">
            Mystery
          </Chip>
          <Chip style={{width: 90}} mode="outlined">
            Adventure
          </Chip>
        </View>
        <Subheading>Mr Pushpraj Singh</Subheading>
        <View style={styles.ratings}>
          <IconButton icon="star" color="#FFD700" />
          <IconButton icon="star" color="#FFD700" />
          <IconButton icon="star" color="#FFD700" />
          <IconButton icon="star" color="#FFD700" />
          <IconButton icon="star-half" color="#FFD700" />
        </View>
        <Caption>
          Lorem ipsum dollibeon est volutpat vehicula. In ac nulla erat. Nullam
          vehicula orci sit amet erat mollis, vitae condimentum neque ultricies.
          In porttitor sapien neque. Praesent maximus sit amet enim quis
          dapibus. Maecenas nec rutrum turpis. Ut ullamcorper condimentum
          aliquam. Aliquamn commopellentesque. Aenean eu dolor vel mauris
          feugiat ultricies feugiat a turpis.
        </Caption>
        <Button
          style={{marginTop: 10}}
          icon="play-circle"
          onPress={() => alert('reading started...')}>
          Start Reading
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  img: {
    alignContent: 'center',
    width: 150,
    height: 200,
    marginLeft: 120,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginLeft: -10,
  },
  content: {
    padding: 25,
  },
  ratings: {
    flexDirection: 'row',
    marginLeft: -10,
  },
  icon: {
    paddingTop: 5,
    height: 10,
    width: 10,
  },
});

export default DetailScreen;
