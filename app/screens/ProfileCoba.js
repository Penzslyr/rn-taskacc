import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{}}>
      <View style={[styles.container, styles.elevation]}>
        <View style={[styles.card]}>
          <Text>ID</Text>
          <Text style={styles.inputVal}>A20134</Text>
        </View>
        <View
          style={{
            borderBottomColor: '##D3D3D3',
            borderBottomWidth: 1,
            marginTop:10,
          }}
        />
         <View style={[styles.card]}>
          <Text>Email</Text>
          <Text style={styles.inputVal}>Siapanamanyayah@gmail.com</Text>
        </View>
        <View
          style={{
            borderBottomColor: '##D3D3D3',
            borderBottomWidth: 1,
            marginTop:10,
          }}
        />
        <View style={[styles.card]}>
          <Text>Date of Birth</Text>
          <Text style={styles.inputVal}>3 May 1999</Text>
        </View>
        <View
          style={{
            borderBottomColor: '##D3D3D3',
            borderBottomWidth: 1,
            marginTop:10,
          }} 
        />
        <View style={[styles.card]}>
          <Text>Gender</Text>
          <Text style={styles.inputVal}>Male</Text>
        </View>
      </View>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    width: 343,
    height: 176,
    backgroundColor: '#ffff',
    borderRadius: 12,
    alignSelf: 'center',
    position: 'absolute', 
    top: -250
  },
  card: {
    marginTop:10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000000',
  },
  inputName: {},
  inputVal: {
    color: "#A7A7A7"
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 165,
  },
});
