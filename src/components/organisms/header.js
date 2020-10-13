import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GRAY_DARK} from '_styles/colors';
import {StackActions} from 'react-navigation';
import {Routes} from '_services/constants';

export default navigation => {
  const _LoginHandler = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: Routes.Library,
        params: {},
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', marginLeft: 12, alignItems: 'center'}}>
        <Icon name="youtube" size={38} color="red" />
        <Text style={styles.text}>YouTube</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 140,
          alignItems: 'center',
        }}>
        <Icon name="video" size={28} color={GRAY_DARK} />
        <Icon
          name="magnify"
          size={28}
          color={GRAY_DARK}
          onPress={_LoginHandler}
        />
        <Icon name="account-circle" size={28} color={GRAY_DARK} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 46,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
