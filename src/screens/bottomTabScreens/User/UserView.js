import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {userApi} from '../../../api/userApi';
import {useIsFocused} from '@react-navigation/native';
import {isDraft} from '@reduxjs/toolkit';
import {clearAuth} from '../../../redux/slices/authSlice';
import {useDispatch} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';

const UserView = () => {
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const [dob, setDob] = useState('23/05/1995');
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUri, setImageUri] = useState(
    'https://dummyjson.com/icon/emilys/128',
  );

  useEffect(() => {
    if (isFocused) {
      // getUserData();
      getProfileApi();
      getRefreshToken();
    }
  }, [isFocused]);

  const getRefreshToken = async () => {
    try {
      const refresh_token = await EncryptedStorage.getItem('refreshToken');
      console.log('refresh_token', refresh_token);
    } catch (error) {
      // There was an error on the native side
    }
  };

  const getUserData = async () => {
    console.log('getUserData');
    try {
      const user_information = await EncryptedStorage.getItem(
        'user_information',
      );
      console.log('abhijeeet', user_information);
      if (user_information) {
        console.log('inside iff');
        const userData = JSON.parse(user_information);
        console.log('userData', userData);
        setUserName(userData?.username);
        setFirstName(userData?.firstName);
        setLastName(userData?.lastName);
        setEmail(userData?.email);
        setImageUri(userData?.image);
      } else {
        setUserName('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setImageUri('');
      }
    } catch (error) {
      // There was an error on the native side
    }
  };

  const getProfileApi = async () => {
    const {status, data} = await userApi();
    console.log('getProfileApi', status);
    console.log('getProfileApi', data);
    try {
      await EncryptedStorage.setItem(
        'user_information',
        JSON.stringify({
          username: data?.username,
          email: data?.email,
          firstName: data?.firstName,
          lastName: data?.lastName,
          image: data?.image,
        }),
      );
      getUserData();

      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
    if (data?.message == 'Token Expired!') {
      console.log('insidde token expired');
      dispatch(clearAuth());
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Edit Profile</Text> */}

      <View style={styles.profileImageContainer}>
        <Image source={{uri: imageUri}} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Icon name="camera" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => setUserName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value="************" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <Picker
          selectedValue={dob}
          style={styles.picker}
          onValueChange={itemValue => setDob(itemValue)}>
          <Picker.Item label="23/05/1995" value="23/05/1995" />
          <Picker.Item label="23/05/1996" value="23/05/1996" />
          <Picker.Item label="23/05/1997" value="23/05/1997" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country/Region</Text>
        <Picker
          selectedValue={selectedCountry}
          style={styles.picker}
          onValueChange={itemValue => setSelectedCountry(itemValue)}>
          <Picker.Item label="Nigeria" value="Nigeria" />
          <Picker.Item label="United States" value="USA" />
          <Picker.Item label="Canada" value="Canada" />
        </Picker>
      </View>

      {/* <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Get data from storage</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={async () => {
          console.log('Remove refresh token');
          try {
            await EncryptedStorage.removeItem('refreshToken');
            console.log('hemant');
            getRefreshToken();
            // Congrats! You've just removed your first value!
          } catch (error) {
            // There was an error on the native side
          }
        }}>
        <Text style={styles.saveButtonText}>Remove refresh token </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={async () => {
          console.log('Remove all data');
          try {
            await EncryptedStorage.removeItem('user_information');
            console.log('puneet');
            getUserData();
            // Congrats! You've just removed your first value!
          } catch (error) {
            // There was an error on the native side
          }
        }}>
        <Text style={styles.saveButtonText}>Remove all data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => dispatch(clearAuth())}>
        <Text style={styles.saveButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: wp(5),
  },
  backButton: {
    position: 'absolute',
    top: hp(2),
    left: wp(5),
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp(3),
  },
  profileImageContainer: {
    alignSelf: 'center',
    position: 'relative',
  },
  profileImage: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(15),
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: wp(5),
  },
  inputContainer: {
    marginBottom: hp(2),
  },
  label: {
    fontSize: wp(4),
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    fontSize: wp(4),
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: wp(4),
  },
  saveButton: {
    backgroundColor: '#1E1E6D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: hp(2),
  },
  saveButtonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});
