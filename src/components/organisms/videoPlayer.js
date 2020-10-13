import React from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

export default props => {
  return (
    <View>
      <Text>this is webview test player</Text>
      <View style={{width: 200, height: 200}}>
        <WebView
          source={{uri: `https://www.youtube.com/embed/${props.videoId}`}}
        />
      </View>
      <Text>{props.title}</Text>
    </View>
  );
};
