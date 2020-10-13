import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '_screens/App/homeScreen';
import {DrawerContent} from './DrawerContent';
import AboutScreen from '_screens/App/About';

const StackApp = createDrawerNavigator();

const AppStackScreen = () => {
  return (
    <StackApp.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <StackApp.Screen name="AboutScreen" component={AboutScreen} />
      <StackApp.Screen name="HomeScreen" component={HomeScreen} />
    </StackApp.Navigator>
  );
};

export default AppStackScreen;
