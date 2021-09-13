import React from 'react';

import {View, StyleSheet, ImageBackground, Text} from 'react-native';

const WidgetImageBar = props => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={{uri: 'asset:/images/' + props.data.image}}
        resizeMode="cover"
        imageStyle={{ borderRadius: 6}}
        style={styles.image}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}>
          <Text style={styles.discountText}>
            Upto {props.data.discount}% OFF
          </Text>
          <Text style={styles.discountText1}>
            on all boooks
          </Text>
        </View>
      </ImageBackground>
      <View style={{marginLeft: 10}}>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              {props.data.title}
            </Text>
            <Text>{props.data.author} </Text>
          </View>
          <View style={{textAlign:'right',width:'100%',textAlignVertical:'center'}}>
            <Text style={{textDecorationLine: 'line-through', color: 'red',textAlign:'center'}}>
              ₹ {props.data.price}
            </Text>
            <Text style={{textAlign:'center'}}> ₹ 500</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingBottom: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 2,
    borderWidth: 0.1,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 20,
  },
  innerBox1: {
    backgroundColor: '#fff',
    position: 'relative',
    top: '55%',
    opacity: 0.5,
    height: '35%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 25,
  },
  innerBox2: {
    position: 'relative',
    top: '28%',
    paddingBottom:5,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  innerBox3: {
    flexDirection: 'row',
  },
  discountText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  discountText1: {
    color:'green',
    marginTop:-5,
    fontSize:12,
    fontWeight:'500',
  },
});

export default WidgetImageBar;
