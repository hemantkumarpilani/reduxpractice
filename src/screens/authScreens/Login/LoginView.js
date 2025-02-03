import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import loginStyle from './styles';

const {width, height} = Dimensions.get('window');
const LoginView = props => {
  return (
    // <SafeAreaView style={loginStyle.safeAreaContainer}>
    //   <View style={loginStyle.outerContainer}>
    //     <ImageBackground
    //       source={require('../../../assets/images/loginBackground.png')}
    //       style={loginStyle.imageContainer}></ImageBackground>
    //   </View>

    //   <View style={loginStyle.footerContainer}></View>
    // </SafeAreaView>
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/loginBackground.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={props.email}
          onChangeText={text => props.setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={props.password}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={text => props.setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={props.loginPress}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot your password?</Text>

      <Text style={styles.connectText}>or connect with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity
          style={[styles.socialButton, {backgroundColor: '#1877F2'}]}>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialButton, {backgroundColor: '#1DA1F2'}]}>
          <Text style={styles.socialText}>Twitter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
      </Text>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  backgroundImage: {
    width: width,
    height: height * 0.8,
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: height * 0.2,
    color: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    elevation: 3,
  },
  input: {
    height: 50,
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 5,
    color: '#6C63FF',
  },
  connectText: {
    marginVertical: 10,
    color: '#333',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  socialText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
    color: '#333',
  },
  signupLink: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
});
