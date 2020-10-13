import React from 'react';
import {View, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GRAY_DARK} from '_styles/colors';

const width = Dimensions.get('screen').width;

export default props => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          elevation: 8,
          marginBottom: 12,
          flex: 1,
          // borderBottomWidth: 1,
          // borderColor: BLACK,
        }}
        onPress={() => console.log(props)}>
        <Image
          source={{
            uri:
              'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg',
          }}
          style={{
            width: '100%',
            height: 190,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="account-circle"
            size={42}
            color={GRAY_DARK}
            style={{marginLeft: 4, margin: 4}}
          />
          <View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                marginTop: 8,
                margin: 2,
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 4,
                marginRight: 4,
                width: width - 86,
              }}>
              {
                'this is the best car ever I recomended to try it but not here in our city w kza mza w heke so bla bla bla bla bla bla (:'
              }
            </Text>
            <Text
              style={{
                fontSize: 14,
                margin: 2,
              }}>
              {'Mohammad Alsheikh'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
