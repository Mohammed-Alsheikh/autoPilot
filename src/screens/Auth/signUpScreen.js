import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '_navigations/authProvider';

const signUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#27AB" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.firstText}>Register !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <Icon name="account-outline" size={24} color="#000000" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Username"
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
        </View>

        <Text style={[styles.textFooter, {marginTop: 32}]}>Password</Text>
        <View style={styles.action}>
          <Icon name="lock-outline" size={24} color="#000000" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password"
            onChangeText={(userPassword) => setPassword(userPassword)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={data.secureTextEntry ? true : false}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Icon name="eye-off" size={24} color="green" />
            ) : (
              <Icon name="eye" size={24} color="green" />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.textFooter, {marginTop: 32}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Icon name="lock-outline" size={24} color="#000000" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Confirm Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Icon name="eye-off" size={24} color="green" />
            ) : (
              <Icon name="eye" size={24} color="green" />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => register(email, password)}>
            <LinearGradient
              colors={['#27ABE2', '#3282b8', '#0f4c75']}
              style={styles.signInButton}>
              <Text style={[styles.signText, {color: '#ffffff'}]}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ABE2',
  },
  header: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  firstText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 98,
  },
  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
  textFooter: {
    fontSize: 18,
    margin: 4,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    paddingBottom: 6,
  },
  textInput: {
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    width: 328,
    paddingLeft: 8,
  },
  button: {
    marginTop: 5,
    alignItems: 'center',
  },
  signInButton: {
    width: 260,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 62,
  },
  signUpButton: {
    borderColor: '#165B87',
    width: 260,
    height: 50,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {
    fontSize: 18,
    fontWeight: '200',
  },
});

export default signUpScreen;
