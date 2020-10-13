import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width;

export default props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={{width: 210, height: 120, margin: 8}}
      />
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            margin: 2,
            width: 158,
            fontSize: 18,
            marginTop: 6,
          }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {props.title}
        </Text>
        <Text style={{fontSize: 12}}>{props.channel}</Text>
        <Icon name="dots-vertical" size={28} style={{marginRight: 32}} />
      </View>
    </View>
  );
};
