import React from 'react';

import {View, StyleSheet, Image} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const WidgetImageBar = props => {
  return (
    <TouchableRipple onPress={() => alert('Nice Choice!')}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{uri: 'asset:/images/' + props.data.source}}
        />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
});

export default WidgetImageBar;
