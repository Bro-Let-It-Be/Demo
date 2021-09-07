import React from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const WidgetYoutubeVideo = props => {
  return (
    <View style={styles.item}>
      <YoutubePlayer
        height={230}
        width={380}
        play={'false'}
        videoId={props.data.videoId}
      />
    </View>
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
});
export default WidgetYoutubeVideo;
