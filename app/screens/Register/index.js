import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import images from '../../assets/index';
import Text from '../../components/text';
import EyeIcon from '../../assets/images/eye.svg';
import EyeSlash from '../../assets/images/eyeSlash.svg';
import Satellite from '../../services/satellite';
import { Fonts, HEIGHT, WIDHT } from '../../assets/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [ErrorPass, setErrorPass] = useState('');
  const [IsVisible, setIsVisible] = useState(true);
  const [IsVisibleConfirm, setIsVisibleConfirm] = useState(true);
  const [isEnable, setIsEnable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nik, setNik] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const hitRegister = async () => {
    if (password === passwordConfirm) {
      const body = {
        doSendRegister: {
          name: name,
          email: email,
          phoneNumber: phone,
          nik: nik,
          password: password,
        },
      };
      Satellite.post('auth/register', body)
        .then((res) => {
          console.log(res.data);
          navigation.navigate('Login');
        })
        .catch((error) => {
          console.log(error.response.data);
        })
        .finally(() => {
          setTimeout(() => {
            setIsEnable(false);
            setIsLoading(false);
          }, 1000);
        });
    }else{
      alert("Please input the same password")
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={images.BG_PROFILE}
        resizeMode='cover'
        style={{ width: WIDHT, height: HEIGHT }}
      >
        <View style={{ marginTop: 50, marginHorizontal: 16, marginBottom: 20 }}>
          <View style={{ marginTop: 30 }}>
            <Text fontSize={16} color='#FFFFFF'>
              Name
            </Text>
            <View
              style={{
                borderWidth: 2,
                marginTop: 8,
                borderRadius: 8,
                borderColor: '#132040',
                backgroundColor: '#253c75',
              }}
            >
              <TextInput
                value={name}
                onChangeText={(val) => {
                  setName(val);
                }}
                underlineColorAndroid='transparent'
                placeholder='Enter Your Name'
                placeholderTextColor='#D3D3D3'
                style={{
                  padding: 12,
                  color: '#FFFF',
                  fontSize: 16,
                  FontFamily: Fonts.Nunito.Regular,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text fontSize={16} color='#FFFFFF'>
              Email
            </Text>
            <View
              style={{
                borderWidth: 2,
                marginTop: 8,
                borderRadius: 8,
                borderColor: '#132040',
                backgroundColor: '#253c75',
              }}
            >
              <TextInput
                value={email}
                onChangeText={(val) => {
                  setEmail(val);
                }}
                inputMode='email'
                underlineColorAndroid='transparent'
                placeholder='Enter Your email'
                placeholderTextColor='#D3D3D3'
                style={{
                  padding: 12,
                  color: '#FFFF',
                  fontSize: 16,
                  FontFamily: Fonts.Nunito.Regular,
                }}
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <Text fontSize={16} color='#FFFFFF'>
                Phone
              </Text>
              <View
                style={{
                  borderWidth: 2,
                  marginTop: 8,
                  borderRadius: 8,
                  borderColor: '#132040',
                  backgroundColor: '#253c75',
                }}
              >
                <TextInput
                  value={phone}
                  onChangeText={(val) => {
                    setPhone(val);
                  }}
                  inputMode='numeric'
                  underlineColorAndroid='transparent'
                  placeholder='Enter Your Phone'
                  placeholderTextColor='#D3D3D3'
                  style={{
                    padding: 12,
                    color: '#FFFF',
                    fontSize: 16,
                    FontFamily: Fonts.Nunito.Regular,
                  }}
                />
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text fontSize={16} color='#FFFFFF'>
                NIK
              </Text>
              <View
                style={{
                  borderWidth: 2,
                  marginTop: 8,
                  borderRadius: 8,
                  borderColor: '#132040',
                  backgroundColor: '#253c75',
                }}
              >
                <TextInput
                  value={nik}
                  onChangeText={(val) => {
                    setNik(val);
                  }}
                  inputMode='numeric'
                  underlineColorAndroid='transparent'
                  placeholder='Enter Your NIK Number'
                  placeholderTextColor='#D3D3D3'
                  style={{
                    padding: 12,
                    color: '#FFFF',
                    fontSize: 16,
                    FontFamily: Fonts.Nunito.Regular,
                  }}
                />
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
                  value={password}
                  onChangeText={(val) => {
                    setPassword(val);
                  }}
                  secureTextEntry={IsVisible}
                  placeholder='Password'
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
            </View>
            <View style={{ marginTop: 20 }}>
              <Text fontSize={16} color='#FFFFFF'>
                Confirm Password
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
                  value={passwordConfirm}
                  onChangeText={(val) => {
                    setPasswordConfirm(val);
                  }}
                  secureTextEntry={IsVisibleConfirm}
                  placeholder='Confirm Password'
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
                  onPress={() => setIsVisibleConfirm(!IsVisibleConfirm)}
                  style={{ position: 'absolute', right: 12, top: 15 }}
                >
                  {IsVisibleConfirm ? <EyeIcon size={20} /> : <EyeSlash />}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              disabled={isEnable}
              onPress={() => hitRegister()}
              style={{
                marginTop: 20,
                marginBottom: 20,
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
                  Register
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
