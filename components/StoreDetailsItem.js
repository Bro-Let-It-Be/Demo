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

const StoreDetailsItem = props => {
  const data = props.data;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{uri: 'asset:/images/' + props.data.uri}}
      />
      <Title style={styles.title}>{data.title}</Title>
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
          vehicula orci sit amet erat mollis, sapien neque. Praesent enim quis
          dapibus. Maecenas nec rutrum turpis. Ut ullamcorper condimentum
          aliquam. Aliquamn commopellentesque. Aultricies feugiat a turpis.
        </Caption>
        <Button
          style={{marginTop: 10}}
          onPress={() => alert('Congratulations! You got this book.')}>
          Buy Now
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
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

export default StoreDetailsItem;
