import { View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import Text from '../../components/text';
import { ScrollView } from 'react-native-gesture-handler';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config';

const CardTask = (data) => {
  <View>
    <Text style={{ marginTop: 10 }}>{data.title}</Text>
  </View>;
};

const Task = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [dataTask, setDataTask] = useState([]);
  const data = useSelector((state) => state.dataTask.dataTask);
  const usersCollectionRef = collection(db, 'tasks');

  const checkStatus = (status) => {
    if (status === 'Present') {
      return '#70A1FF';
    }
    if (status === 'Absent') {
      return '#EF9F9F';
    }
    if (status === 'Sick') {
      return '#ECCC68';
    }
    if (status === 'Leave') {
      return '#FDE180';
    }
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(usersCollectionRef);
      setDataTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(JSON.stringify(dataTask, null, 2));
    };
    getTasks();
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [isFocused]);
  return (
    <View>
      <ScrollView style={{ marginHorizontal: 16 }}>
        {dataTask &&
          dataTask.map((item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Update', {
                  item,
                })
              }
              key={item.id}
              style={{
                width: 343,

                borderWidth: 0.5,
                borderColor: '#A7A7A7',
                borderRadius: 12,
                paddingLeft: 16,
                paddingRight: 20,
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: 58, height: 58 }}
                  source={require('../../assets/images/Task.png')}
                ></Image>
                <Text bold color='#160520' style={{ width: 254 }} fontSize={18}>
                  {item.title}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    width: 12,
                    height: 12,
                    marginLeft: 16,
                    alignSelf: 'center',
                  }}
                  source={require('../../assets/images/flagOrange.png')}
                ></Image>
                <Text
                  bold
                  color='#7A7A7A'
                  style={{ marginLeft: 6, width: 254 }}
                  fontSize={12}
                >
                  {parseISOString(item.date).toLocaleDateString(
                    'en-US',
                    options
                  )}
                </Text>
              </View>
              <Text
                style={{ marginLeft: 12, marginTop: 11 }}
                regular
                fontSize={12}
              >
                {item.activities}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  fontSize={13}
                  style={{
                    marginLeft: 11,
                    borderRadius: 8,
                    textAlign: 'center',
                    height: 30,
                    width: 70,
                    marginTop: 11,
                    backgroundColor: checkStatus(item.status),
                    padding: 5,
                  }}
                  color='#ffff'
                >
                  {item.status}
                </Text>
                <Text
                  fontSize={13}
                  style={{
                    marginLeft: 11,
                    borderRadius: 8,
                    textAlign: 'center',
                    height: 30,

                    marginTop: 11,
                    backgroundColor: '#CED1D4',
                    padding: 5,
                  }}
                  color='#ffff'
                >
                  {new Date(item.startTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                  -
                  {new Date(item.endTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Task;
