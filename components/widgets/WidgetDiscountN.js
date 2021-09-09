import React from 'react';

import {View, StyleSheet, Text, FlatList, ImageBackground} from 'react-native';

const Widget = props => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={{uri: 'asset:/images/' + props.data.image}}
        resizeMode="cover"
        imageStyle={{borderRadius: 6}}
        style={styles.image}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}>
          <Text style={styles.discountText}>
            Upto {props.data.discount}% OFF
          </Text>
        </View>
      </ImageBackground>
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          {props.data.title}
        </Text>
        <View style={styles.innerBox3}>
          <Text style={{fontSize: 12, fontWeight: '300'}}>
            {props.data.author}{' '}
          </Text>
        </View>
      </View> 
    </View>
  );
};

const renderItem = ({item}) => <Widget data={item} />;

const WidgetDiscountN = props => {
  return (
    <View style={{paddingLeft:5,paddingRight:10,}}>
      <FlatList
        nestedScrollEnabled
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingBottom: 5,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 0.1,
  },
  image: {
    width: 170,
    height: 80,
    borderRadius: 5,
  },
  innerBox1: {
    backgroundColor: '#000',
    position: 'relative',
    top: '65%',
    opacity: 0.7,
    height: '35%',
    width: '100%',
    alignSelf: 'center',
  },
  innerBox2: {
    marginTop: 10,
  },
  innerBox3: {
    flexDirection: 'row',
  },
  discountText: {
    color: '#fff',
    marginTop: 15,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
});

export default WidgetDiscountN;
