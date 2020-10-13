import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Logo = require('_assets/icons/introScreen.png');

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          resizeMode="stretch"
          source={Logo}
          style={styles.logo}
        />
        <StatusBar backgroundColor="#27AB" barStyle="light-content" />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUp">
        <Text style={styles.firstText}>Stay Connect With Us</Text>
        <Text style={styles.secondText}>Sign in with account</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            <LinearGradient
              style={styles.signIn}
              colors={['#27ABE2', '#3282b8', '#0f4c75']}>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={styles.textButton}>Sign In</Text>
                <Icon
                  style={styles.icon}
                  name="chevron-right"
                  size={26}
                  color="#ffffff"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const Height_Logo = height * 0.32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ABE2',
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Height_Logo,
    height: Height_Logo,
    alignSelf: 'center',
    bottom: 40,
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  firstText: {
    color: '#000000',
    fontSize: 28,
    margin: 12,
    padding: 12,
    fontWeight: 'bold',
  },
  secondText: {
    fontSize: 16,
    marginLeft: 28,
  },
  signIn: {
    width: 152,
    height: 42,
    justifyContent: 'center',
    borderRadius: 22,
  },
  button: {
    marginLeft: 240,
  },
  textButton: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '100',
    color: '#ffffff',
  },
  icon: {
    marginTop: 4,
    marginLeft: 6,
  },
});
export default IntroScreen;
