import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LibraryBooks from './LibraryBooks';
import DetailScreen from './DetailScreen';

const LibraryStack = createNativeStackNavigator();

const Library = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryBooks"
        component={LibraryBooks}
        options={{headerShown: false}}
      />
      <LibraryStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </LibraryStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Library;
