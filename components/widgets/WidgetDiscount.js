import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import WidgetDiscountOne from './WidgetDiscountOne';
import WidgetDiscountN from './WidgetDiscountN';

const WidgetDiscount = props => {
  if (props.data.books.length == 1) {
    return (
      <TouchableRipple onPress={() => alert('Nice Choice!')}>
        <WidgetDiscountOne data={props.data.books[0]} />
      </TouchableRipple>
    );
  } else if (props.data.books.length > 1) {
    return (
        <WidgetDiscountN data={props.data.books} />
    );
  }
};

const styles = StyleSheet.create({});

export default WidgetDiscount;
