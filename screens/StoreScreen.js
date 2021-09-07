import React from 'react';

import {StyleSheet} from 'react-native';
import List from '../components/List';

const Store = [
  {
    id: '5864a0f3d1-471f-bd96-145571e29d724dd',
    type: 'widgetImageSlider',
    images: [
      require('../android/app/src/main/assets/images/hp4.jpeg'),
      require('../android/app/src/main/assets/images/hp2.jpeg'),
      require('../android/app/src/main/assets/images/hp3.jpeg'),
      require('../android/app/src/main/assets/images/hp1.jpeg'),
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724dd',
    title: 'Amara the Brave',
    type: 'store',
    uri: 'sb11.jpeg',
    price: '₹ 145.78',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bggdd',
    title: 'Spirit\'s voice',
    type: 'store',
    uri: 'sb10.jpeg',
    price: '₹ 458',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'The Victim\'s Picture',
    type: 'store',
    uri: 'sb9.jpeg',
    price: '₹ 158.50',
  },
  {
    id: '864a0f3d1-471f-bd96-145571e29d724dd',
    type: 'widgetDiscount',
    books:[
      {
        image: 'banner1.jpeg',
        title: 'The Autum Palace',
        subTitle: 'Till Wednesday',//add substitlle, reduce font weight and size, capable to limit length(word wrap)
        author: 'Ebony McKenna',
        price: 1000,
        discount: 50,
      },
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Normal People',
    type: 'store',
    uri: 'sb8.jpeg',
    price: '₹ 327.87',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'The Book of Chaos',
    type: 'store',
    uri: 'sb7.jpeg',
    price: '₹ 254.50',
  },
  {
    id: '5864a0f3da1-471f-bd96-145571e29d724dd',
    type: 'widgetImage',
    source: 'bookaddBar.jpeg',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'The Magic Forest',
    type: 'store',
    uri: 'sb6.jpeg',
    price: '₹ 158.50',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bard',
    title: 'The Language of Fire',
    type: 'store',
    uri: 'sb5.jpeg',
    price: '₹ 876.98',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632d',
    title: 'Journey to the Stars',
    type: 'store',
    uri: 'sb4.jpeg',
    price: '₹ 234.50',
  },
  {
    id: '5864a0fda1-471f-bd96145571e29d724dd',
    type: 'widgetGetBookByType',
    source: 'moreBookBygenre.jpeg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724d',
    title: 'Dune',
    type: 'store',
    uri: 'sb3.jpeg',
    price: '₹ 158.50',
  },
  {
    id: 'bd7acbea-c1b146c2-aed5-3ad53abb28bggdd',
    type: 'widgetVideo',
    videoId: 'nxeWa0K-4SY',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bggd',
    title: 'The Pen & The Sword',
    type: 'store',
    uri: 'sb2.jpeg',
    price: '₹ 123.90',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63d',
    title: 'Follow Me To Ground',
    type: 'store',
    uri: 'sb1.jpeg',
    price: '₹ 158.50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71d',
    title: 'Grower\'s Gift',
    type: 'store',
    uri: 'add2.png',
    price: '₹ 127.35',
  },
  {
    id: '8640f3d1-471f-bd96-145571e29d724dd',
    type: 'widgetDiscount',
    books:[
      { 
        bookId: 'jsjsjs1',
        image: 'banner1.jpeg',
        title: 'Tide of Season',
        author: 'Aaron James',
        price: 100,
        discount: 50,
      },
      {
        bookId: 'jsjsks2',
        image: 'd2.jpeg',
        title: 'Rebel Dragon',
        author: 'Steve Turnbull',
        price: 100,
        discount: 50,
      },
      {
        bookId: 'jsjkjsks3',
        image: 'd3.jpeg',
        title: 'The Dream Leaper',
        author: 'Cory Barclay',
        price: 100,
        discount: 50,
      },
      {
        bookId: 'jsjkpooks4',
        image: 'd4.jpeg',
        title: 'Shroud of Eternity',
        author: 'Terry Goodkind',
        price: 100,
        discount: 50,
      },
    ]
  },
];

const StoreScreen = () => {
  return <List data={Store} />;
};

const styles = StyleSheet.create({});

export default StoreScreen;
