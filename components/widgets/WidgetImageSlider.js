import React from 'react';

import {View, StyleSheet } from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';

const WidgetImageSlider = props => {
  return (
    <TouchableRipple>
      <View style={styles.item}>
        <SliderBox
          images={props.data.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => alert(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          style={styles.image}
        />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  image: {
    width: 380,
    height: 140,
    borderRadius: 10,
  },
});

export default WidgetImageSlider;
