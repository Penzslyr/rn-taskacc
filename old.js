import { Component, useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function App() {
  // penggunaan state
  // add number == valuenya
  // setnumber == memberikan value ke state
  const [addNumber, setNumber] = useState(3);
  const [addString, setString] = useState('');
  const [fromChild, setFromChild] = useState('');
  const penjumlahan = (params) => {
    if (params == 'plus') {
      setNumber(addNumber + 1);
      setString('PLUS');
    } else if (params == 'minus') {
      setNumber(addNumber - 1);
      setString('MINUS');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 30, fontSize: 50 }}>
        Ini Isi State : {addNumber} {fromChild}
      </Text>
      <TouchableOpacity
        onPress={() => penjumlahan('plus')}
        style={{ backgroundColor: 'grey' }}
      >
        <Text style={{ fontSize: 50 }}>Ini Button +</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => penjumlahan('minus')}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ fontSize: 50 }}>Ini Button -</Text>
      </TouchableOpacity>

      <AddImage />
      <InputText InputText={addNumber} InputTextString={addString} sendProps={(val)=> setFromChild(val)} />
      <TextClass />
    </View>
  );
}

const AddImage = () => {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: 'https://placeimg.com/200/200/people' }}
    />
  );
};

const InputText = ({InputText, InputTextString, sendProps }) => {
  return (
    <>
      <TextInput style={{ borderWidth: 1, marginTop: 20, padding: 5 }} />

      <Text style={{ fontSize: 50 }}>
        {InputText} {InputTextString}
      </Text>
      <Button
        onPress={() => sendProps('INI DARI CHILD')}
        title='Send to Parent'
      />
    </>
  );
};

class TextClass extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          flex: 1,
          flexDirection: 'row',
          //justifyContent: 'flex-end',
          //alignItems: 'flex-end'
        }}
      >
        <View
          style={{
            borderWidth: 1,
            backgroundColor: 'red',
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            borderWidth: 1,
            backgroundColor: 'purple',
            width: 100,
            height: 100,
            alignSelf: 'flex-end',
          }}
        />
        {/* <View style={{ borderWidth: 1, backgroundColor: 'green', flex: 1 }} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 /*Flex 1 seratus persen*/,
    backgroundColor: '#ddd',
    marginTop: 30,
  },
});

export default App;
