import React from 'react';
import {Text} from 'react-native';

import {Container, RegisterButton, LoginButton} from './styles';

const Landing = ({navigation}) => {
  return (
    <Container>
      <RegisterButton
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <LoginButton
        title="Login"
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  );
};

export default Landing;
