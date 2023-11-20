import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] =  ate(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleAuthentication = () => {
    if (isLogin) {
      // Implement the login logic here
      axios
        .post('http://localhost:3036/login', { // Removed extra slashes here
          username: username,
          password: password,
        })
        .then((response) => {
          alert(response.data); // Handle login success
        })
        .catch((error) => {
          alert('Login failed: ' + error.message); // Handle login failure
        });
    } else {
      // Implement the signup logic here
      axios
        .post('http://localhost:3036/signup', { // Removed extra slashes here
          username: username,
          password: password,
        })
        .then((response) => {
          alert(response.data); // Handle signup success
        })
        .catch((error) => {
          alert('Signup failed: ' + error.message); // Handle signup failure
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuthentication} />
      <Button title={isLogin ? 'Switch to Sign Up' : 'Switch to Login'} onPress={handleToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginSignupScreen;
