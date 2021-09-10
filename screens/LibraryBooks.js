import React from 'react';

import {StyleSheet} from 'react-native';
import List from '../components/List';

const Store = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Design Formula jdnfjiwr iniwe weifnew fewinwe weinwe iwe weijj weinwei weiwe ewindew dewidnewdeidn',
    type: 'lib',
    uri: 'book1.jpeg',
    completed: '45 %',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'The Gravity of Us',
    type: 'lib',
    uri: 'book2.jpeg',
    completed: '95 %',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Memory',
    type: 'lib',
    uri: 'book3.jpeg',
    completed: '90 %',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
    title: 'The King of Drugs',
    type: 'lib',
    uri: 'book4.jpeg',
    completed: '87 %',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Little Mermaid',
    type: 'lib',
    uri: 'book5.jpeg',
    completed: '98 %',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bard',
    title: 'Only Words',
    type: 'lib',
    uri: 'book6.jpeg',
    completed: '100 %',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632d',
    title: 'The Fortress Blood',
    type: 'lib',
    uri: 'book7.jpeg',
    completed: '100 %',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724d',
    title: 'The Dark Side of Winter',
    type: 'lib',
    uri: 'book8.jpeg',
    completed: '100 %',
  },
];

const Books = () => {
  return <List data={Store} />;
};

const styles = StyleSheet.create({});

export default Books;
