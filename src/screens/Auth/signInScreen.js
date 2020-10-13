import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const signInScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [data, setData] = React.useState({
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#27AB" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.firstText}>Welcome !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.textFooter}>Username</Text>
        <View style={styles.action}>
          <Icon name="account-outline" size={24} color="#000000" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Username"
            keyboardType="email-address"
          />
        </View>

        <Text style={[styles.textFooter, {marginTop: 32}]}>Password</Text>
        <View style={styles.action}>
          <Icon name="lock-outline" size={24} color="#000000" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password"
            autoCapitalize="none"
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
        <TouchableOpacity>
          <Text style={{color: '#EC4854', fontSize: 14, paddingTop: 6}}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => login(email, password)}>
            <LinearGradient
              colors={['#27ABE2', '#3282b8', '#0f4c75']}
              style={styles.signInButton}>
              <Text style={[styles.signText, {color: '#ffffff'}]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={styles.signText}>Sign Up</Text>
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
    marginTop: 148,
  },
  footer: {
    flex: 2,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
  textFooter: {
    fontSize: 18,
    margin: 8,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    paddingBottom: 8,
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
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
    marginTop: 42,
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

export default signInScreen;
