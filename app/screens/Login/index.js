import {
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import images from '../../assets/index';
import { Fonts, HEIGHT, WIDHT } from '../../assets/styles';
import Text from '../../components/text';
import { TextInput } from 'react-native-gesture-handler';
import EyeIcon from '../../assets/images/eye.svg';
import EyeSlash from '../../assets/images/eyeSlash.svg';
import Satellite from '../../services/satellite';

import { store } from '../../store/storage';
import { saveProfile } from '../../store/action/actionProfile';
const { dispatch } = store;

const Login = ({ navigation }) => {
  const [isEnable, setIsEnable] = useState(true);
  // useState => asyncronous / butuh waktu
  const [focus, setFocus] = useState(false);
  const [IsVisible, setIsVisible] = useState(true);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ErrorPass, setErrorPass] = useState('');
  const [ErrorMail, setErrorMail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // custom hooks
  // KETIKA state ada val berubah, maka akan mencoba membaca kembali val nya
  // nge render ulang jika value yang ada di params berubah
  useEffect(() => {
    validation();
    return () => {};
  }, [Email, Password]);

  const validation = () => {
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if (Email && Password) {
      if (regexEmail.test(Email)) {
        setErrorMail('');
      } else {
        setErrorMail('Email not valid');
      }

      if (Password.length > 0 && Password.length <= 8) {
        setErrorPass('Password must more than 8 characters');
      } else {
        setErrorPass('');
      }

      setIsEnable(false);
    } else {
      if (Password) {
        setErrorPass('');
      } else {
        setErrorPass('Password must be filled in');
      }
      if (Email) {
        setErrorMail('');
      } else {
        setErrorMail('Email must be filled in');
      }
      setIsEnable(true);
    }
  };

  //   const loginAuth = async () => {
  //     const body = {
  //       email: Email,
  //       password: Password,
  //     };
  //     //await berfungsi ketika var login ditunggu dlu sampai menerima return dari satelite.post (return apapun)
  //     setIsEnable(true);
  //     setIsLoading(true);
  //     try {
  //       //dieksekusi jika hanya axios berhasil
  //       const login = await Satellite.post('auth/login', body);
  //       console.log('LOGIN DATA: ', JSON.stringify(login.data, null, 2));
  //     } catch (error) {
  //       //dieksekusi ketika error
  //       console.log(JSON.stringify(error.response.data, null, 2));
  //       setErrorMail('Email not valid');
  //       setErrorPass('Password not valid');
  //     } finally {
  //       //dieksekusi ketika response nya selesai baik error atau berhasil
  //       setTimeout(() => {
  //         setIsEnable(false);
  //         setIsLoading(false);
  //       }, 1000);
  //     }
  //   };

  const loginAuth = async () => {
    const body = {
      email: Email,
      password: Password,
    };
    setIsLoading(true);
    setIsEnable(true);
    Satellite.post('auth/login', body)
      .then((res) => {
        console.log('LOGIN DATA: ', JSON.stringify(res.data, null, 2));
        dispatch(saveProfile(res.data.data));
        navigation.navigate('Main');
      })
      .catch((error) => {
        console.log(JSON.stringify(error.response.data, null, 2));
        setErrorMail('Email not valid');
        setErrorPass('Password not valid');
      })
      .finally(() => {
        setTimeout(() => {
          setIsEnable(false);
          setIsLoading(false);
        }, 1000);
      });
  };

  return (
    <ImageBackground
      source={images.BG_PROFILE}
      resizeMode='cover'
      style={{ width: WIDHT, height: HEIGHT }}
    >
      <View style={{ marginTop: 90, marginHorizontal: 16 }}>
        <View>
          <Text fontSize={16} color='#FFFFFF'>
            Email
          </Text>
          <View
            style={{
              borderWidth: 1,
              marginTop: 8,
              borderRadius: 8,
              borderColor: ErrorMail ? '#EA8685' : '#132040',
              backgroundColor: '#253c75',
            }}
          >
            <TextInput
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              keyboardType='default'
              value={Email}
              onChangeText={(val) => {
                setEmail(val);
              }}
              underlineColorAndroid='transparent'
              placeholder='Enter your email'
              placeholderTextColor='#D3D3D3'
              style={{
                padding: 12,
                color: '#FFFF',
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
              }}
            />
          </View>
          <View style={{ position: 'absolute', bottom: -25, right: 5 }}>
            <Text fontSize={14} color='#EA8685'>
              {ErrorMail}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text fontSize={16} color='#FFFFFF'>
            Password
          </Text>
          <View
            style={{
              borderWidth: 1,
              marginTop: 8,
              borderRadius: 8,
              borderColor: ErrorPass ? '#EA8685' : '#132040',
              backgroundColor: '#253c75',
            }}
          >
            <TextInput
              value={Password}
              onChangeText={(val) => {
                setPassword(val);
              }}
              secureTextEntry={IsVisible}
              placeholder='Enter your Password'
              placeholderTextColor='#D3D3D3'
              style={{
                padding: 12,
                color: '#FFFF',
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
              }}
            />
            <View style={{ position: 'absolute', bottom: -25, right: 5 }}>
              <Text fontSize={14} color='#EA8685'>
                {ErrorPass}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setIsVisible(!IsVisible)}
              style={{ position: 'absolute', right: 12, top: 15 }}
            >
              {IsVisible ? <EyeIcon size={20} /> : <EyeSlash />}
            </TouchableOpacity>
          </View>
          <Text
            style={{ marginTop: 5, marginLeft: 5 }}
            fontSize={12}
            color='#F6E58D'
          >
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity
          disabled={isEnable}
          onPress={() => loginAuth()}
          style={{
            marginTop: 20,
            opacity: isEnable ? 0.5 : 1,
            backgroundColor: '#18DCFF',
            borderRadius: 8,
            paddingVertical: 12,
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <ActivityIndicator size='small' color='#160520' />
          ) : (
            <Text bold fontSize={16} color='#261A31'>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text color='#FFFFFF'>
            Don't have an account?{' '}
            <Text color='#F6E58D' onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
