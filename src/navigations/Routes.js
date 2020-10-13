import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './authProvider';
import auth from '@react-native-firebase/auth';

import AuthStackScreen from './auth-screen';
import AppStackScreen from './app-screen';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Routes;
