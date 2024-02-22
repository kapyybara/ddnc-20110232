import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  TextInput,
  Button,
  Card,
  Avatar,
  IconButton,
  Divider,
} from 'react-native-paper';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    // Thực hiện xử lý đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Card.Title
        title="Login with Google"
        titleStyle={styles.loginWithTitle}
        style={styles.loginWithGoogle}
        left={props => (
          <Avatar.Image
            style={styles.loginWithLeft}
            size={48}
            source={require('../assets/google.png')}
          />
        )}
      />
      <View style={styles.or}>
        <Divider />
        <Text style={styles.orText}>OR</Text>
        <Divider />
      </View>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Enter your Email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Enter your Pass"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Đăng nhập
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    marginBottom: 10,
    width: '100%',
  },
  button: {
    width: '100%',
  },
  loginWithTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  loginWithLeft: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  loginWithGoogle: {
    backgroundColor: '#E3F4E1',
  },
  or: {
    // flex: 1,
    // flexDirection: 'row',
    height: 24,
    fontWeight: 'bold'
  },
  orText: {
    color: '#000'
  }
});

export default Login;
