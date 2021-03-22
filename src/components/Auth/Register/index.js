import React from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {Button, TextInput} from 'react-native';

import {Container, NameInput, EmailInput, PasswordInput} from './styles';

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  const onSignUp = useCallback(() => {
    
  }, []);

  return (
    <Container>
      <TextInput
        placehold="Nome"
        onChangeText={name => setNewUser({...newUser, name})}
      />
      <TextInput
        placehold="E-mail"
        onChangeText={email => setNewUser({...newUser, email})}
      />
      <TextInput
        placehold="Senha"
        secureTextEntry={true}
        onChangeText={password => setNewUser({...newUser, password})}
      />
      <Button title="Register" onPress={() => onSignUp()} />
    </Container>
  );
};

export default Register;
