import React from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableRipple, Chip} from 'react-native-paper';

const WidgetGetMoreBooks = props => {
  return (
    <TouchableRipple
      onPress={() =>
        alert(
          'Nice choice! You have a good taste in genre...',
        )
      }>
      <View style={styles.item}>
        <View style={styles.rowBox}>
          <Text style={styles.title}>Get more in</Text>
          <Chip icon="information" mode="outlined" style={styles.chip}>
            Adventure
          </Chip>
        </View>
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
  rowBox: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    marginBottom: 10,
    paddingLeft: 10,
  },
  chip: {
    marginLeft: 10,
  },
  image: {
    width: 380,
    height: 140,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default WidgetGetMoreBooks;
