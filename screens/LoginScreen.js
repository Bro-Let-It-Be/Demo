import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, StatusBar} from 'react-native';

import {Button} from 'react-native-paper';

function LogInScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginFunction = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Home');
    } else {
      alert('wrong username/password');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <Text>Welcome to world of Books!</Text>

      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={username => setUsername(username)}
        defaultValue={username}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={password => setPassword(password)}
        defaultValue={password}
      />

      <Button mode="contained" title="Login" onPress={() => loginFunction()}>
        Log in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default LogInScreen;
