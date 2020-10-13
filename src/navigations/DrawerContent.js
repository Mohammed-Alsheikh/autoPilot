import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Logo = require('_assets/icons/barIcon.jpg');

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{padding: 16}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title style={{fontSize: 18, fontWeight: '200'}}>Auto Pilot</Title>
            <Image source={Logo} style={styles.image} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#27AB',
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            paddingVertical: 12,
          }}>
          <Drawer.Section>
            <DrawerItem
              icon={({size}) => <Icon name="home" size={size} color="white" />}
              label="Home"
              onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}
            />
            <DrawerItem
              icon={({size, color}) => (
                <Icon name="infocirlceo" size={size} color="white" />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate('AboutScreen');
              }}
            />
            <Drawer.Section>
              <Drawer.Item
                style={styles.logOut}
                label="Log Out"
                activeTintColor="#ffffff"
                inactiveTintColor="#1999CE"
                activeBackgroundColor="#1999CE"
                inactiveBackgroundColor="#ffffff"
                fontSize="15"
                icon={({size, color}) => (
                  <Icon name="logout" size={size} color="white" />
                )}
                onPress={() => {}}
              />
            </Drawer.Section>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 106,
    height: 106,
  },
  logOut: {
    marginVertical: 310,
    color: '#ffffff',
  },
});
