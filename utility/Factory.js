import React from 'react';

import {StyleSheet, FlatList} from 'react-native';

import LibraryBook from '../components/LibraryBook';
import StoreBook from '../components/StoreBook';
import WidgetImageBar from '../components/widgets/WidgetImageBar';
import WidgetYoutubeVideo from '../components/widgets/WidgetYoutubeVideo';
import WidgetGetMoreBooks from '../components/widgets/WidgetGetMoreBooks';
import WidgetImageSlider from '../components/widgets/WidgetImageSlider';
import WidgetDiscount from '../components/widgets/WidgetDiscount';

const renderItem = ({item}) => {
  switch (item.type) {
    case 'lib':
      return <LibraryBook data={item} />;
    case 'store':
      return <StoreBook data={item} />;
    case 'widgetImage':
      return <WidgetImageBar data={item} />;
    case 'widgetVideo':
      return <WidgetYoutubeVideo data={item} />;
    case 'widgetGetBookByType':
      return <WidgetGetMoreBooks data={item} />;
    case 'widgetImageSlider':
      return <WidgetImageSlider data={item} />;
    case 'widgetDiscount':
      return <WidgetDiscount data={item} />
    default:
      return null;
  }
};

const Factory = props => {
  return (
    <FlatList
      nestedScrollEnabled
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default Factory;
