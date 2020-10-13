import React from 'react';
import {AuthProvider} from './authProvider';
import Routes from './Routes';

const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;
