import {
  Dimensions,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { WIDHT, HEIGHT, verticalScale, SHADOW } from '../../assets/styles';
import Text from '../../components/text';
import { useSelector } from 'react-redux';
const Profile1 = ({ navigation, route }) => {
  const data = useSelector((state) => state.dataProfile.dataProfile[0]);
  console.log(
    'INI DATA pfp',
    JSON.stringify(data, null, 2)
  );
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/images/bgProfile1.png')}
        resizeMode='cover'
        style={{
          width: WIDHT,
          height: 495,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 85,
            borderWidth: 2,
            borderRadius: 90,
            borderColor: '#FBD2A5',
          }}
        >
          <Image
            source={require('../../assets/images/person2.png')}
            style={{}}
          />
        </TouchableOpacity>
        <View style={{ marginTop: 16, alignItems: 'center' }}>
          <Text bold fontSize={20}>
            {data.nameUser}
          </Text>
          <Text bold fontSize={14} color='#909090'>
            React Native Developer
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 16, marginTop: -190 }}>
        <View
          style={[
            {
              borderRadius: 12,
              padding: 16,
              backgroundColor: '#FFFFFF',
            },
            SHADOW,
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1 }} fontSize={14} bold>
              ID
            </Text>
            <Text
              style={{ flex: 1, textAlign: 'right' }}
              fontSize={12}
              bold
              color='#A7A7A7'
            >
              A20134
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#D3D3D3',
              marginVertical: 13,
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1 }} fontSize={14} bold>
              EMAIL
            </Text>
            <Text
              style={{ textAlign: 'left' }}
              fontSize={14}
              bold
              color='#A7A7A7'
            >
              {data.email}
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#D3D3D3',
              marginVertical: 13,
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1 }} fontSize={14} bold>
              DATE OF BIRTH
            </Text>
            <Text
              style={{ flex: 1, textAlign: 'right' }}
              fontSize={12}
              bold
              color='#A7A7A7'
            >
              17 AUGUST 1945
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#D3D3D3',
              marginVertical: 13,
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1 }} fontSize={14} bold>
              GENDER
            </Text>
            <Text
              style={{ flex: 1, textAlign: 'right' }}
              fontSize={12}
              bold
              color='#A7A7A7'
            >
              Male
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={[
              {
                borderRadius: 12,
                padding: 16,
                backgroundColor: '#FFFFFF',
              },
              SHADOW,
            ]}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text bold fontSize={14}>
                  Team
                </Text>
                <Text fontSize={14} color='#A7A7A7'>
                  React Native
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {/* <Image
                  source={require('../../assets/images/Team.png')}
                  style={{}} /> */}
                <Image
                  source={require('../../assets/images/person6.png')}
                  style={{}}
                />
                <Image
                  source={require('../../assets/images/person10.png')}
                  style={{}}
                />
                <Image
                  source={require('../../assets/images/person3.png')}
                  style={{}}
                />
                <View
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: '#C16262',
                    borderRadius: 16,
                  }}
                />
                <Text style={{}}>+6</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                borderRadius: 12,
                marginTop: 20,
                padding: 16,
                backgroundColor: '#FFFFFF',
              },
              SHADOW,
            ]}
          >
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Image
                source={require('../../assets/images/guardreal.png')}
                style={{}}
              />
              <Text style={{ marginLeft: 11 }} bold fontSize={14}>
                Privacy & Security
              </Text>
              <Image
                source={require('../../assets/images/Vector.png')}
                style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
              />
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: '#D3D3D3',
                marginVertical: 13,
              }}
            />
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Image
                source={require('../../assets/images/help.png')}
                style={{}}
              />
              <Text style={{ marginLeft: 11 }} bold fontSize={14}>
                Help
              </Text>
              <Image
                source={require('../../assets/images/Vector.png')}
                style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
              />
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: '#D3D3D3',
                marginVertical: 13,
              }}
            />
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Image
                source={require('../../assets/images/about.png')}
                style={{}}
              />
              <Text style={{ marginLeft: 11 }} bold fontSize={14}>
                About Us
              </Text>
              <Image
                source={require('../../assets/images/Vector.png')}
                style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
              />
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: '#D3D3D3',
                marginVertical: 13,
              }}
            />
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Image
                source={require('../../assets/images/logout.png')}
                style={{}}
              />
              <Text style={{ marginLeft: 11 }} bold fontSize={14}>
                Log Out
              </Text>
              <Image
                source={require('../../assets/images/Vector.png')}
                style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
              />
            </View>
          </View>
          <Text style={{ marginVertical: 20, textAlign: 'center' }} bold>
            v0.0.1
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile1;
