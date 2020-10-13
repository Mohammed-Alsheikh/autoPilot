import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import IntroScreen from '_screens/Auth/introScreen';
import SignInScreen from '_screens/Auth/signInScreen';
import SignUpScreen from '_screens/Auth/signUpScreen';
import HomeScreen from '_navigations/app-screen';

const RootStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="IntroScreen" component={IntroScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackScreen;
