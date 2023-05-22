import { View, TextInput, Pressable, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Text from '../../components/text';
import { Fonts, HEIGHT, WIDHT } from '../../assets/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../../config';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { store } from '../../store/storage';
import { addTask } from '../../store/action/actionAddTask';
import { useNavigation, useRoute } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
const { dispatch } = store;

const UpdateScreen = ({ navigation }, id) => {
  const route = useRoute();
  //   console.log('Ini data update: ', route.params.item.id);
  const [Title, setTitle] = useState(route.params.item.title);
  const [date, setDate] = useState(new Date(route.params.item.date));
  const [dateClicked, setDateClicked] = useState(false);
  const [dateReal, setDateReal] = useState(new Date());
  const [startTime, setStartTime] = useState(
    new Date(route.params.item.startTime)
  );
  const [EndTime, setEndTime] = useState(new Date(route.params.item.endTime));
  const [Status, setStatus] = useState(route.params.item.status);
  const [Description, setDescription] = useState(route.params.item.activities);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const deleteTask = async () => {
    const taskDoc = doc(db, 'tasks', route.params.item.id);
    await deleteDoc(taskDoc);
  };

  const updateTask = async () => {
    const taskDoc = doc(db, 'tasks', route.params.item.id);
    updateDoc(taskDoc, {
      title: Title,
      date: date.toISOString(),
      startTime: startTime.toISOString(),
      endTime: EndTime.toISOString(),
      status: Status,
      activities: Description,
    });
  };

  // const dataStatus = [
  //   { label: 'Present', value: 'Present' },
  //   { label: 'Leave', value: 'Leave' },
  //   { label: 'Absent', value: 'Absent' },
  //   { label: 'Sick', value: 'Sick' },
  // ];

  const showDatePicker = (currentMode) => {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
      setDateClicked(true);
    };

    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  const showTimePickerStart = (currentMode) => {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setStartTime(currentDate);
    };

    DateTimePickerAndroid.open({
      value: startTime,
      onChange,
      mode: 'time',
      is24Hour: false,
    });
  };

  const showTimePickerEnd = (currentMode) => {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setEndTime(currentDate);
    };

    DateTimePickerAndroid.open({
      value: EndTime,
      onChange,
      mode: 'time',
      is24Hour: false,
    });
  };

  const sendTask = {
    title: Title,
    date: date,
    startTime: startTime,
    endTime: EndTime,
    status: Status,
    description: Description,
  };

  // const navigate = useNavigation()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ marginHorizontal: 16 }}>
        <View style={{ marginTop: 10 }}>
          <Text fontSize={16} regular bold>
            Title
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#A7A7A7',
              marginTop: 8,
              borderRadius: 8,
              backgroundColor: '#FBFBFB',
            }}
          >
            <TextInput
              value={Title}
              onChangeText={(val) => {
                setTitle(val);
              }}
              placeholder='Enter Task Title'
              placeholderTextColor='#D3D3D3'
              style={{
                width: 343,
                height: 46,
                padding: 12,
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text fontSize={16} regular bold>
            Date
          </Text>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#A7A7A7',
              marginTop: 8,
              borderRadius: 8,
              backgroundColor: '#FBFBFB',
            }}
            onPress={() => showDatePicker()}
          >
            <TextInput
              style={{
                width: 343,
                height: 46,
                padding: 12,
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
                color: 'black',
              }}
              editable={false}
              value={date.toLocaleDateString('en-US', options)}
              autoCorrect={true}
              placeholder='Date'
              placeholderTextColor='#D3D3D3'
            />
            <Image
              style={{
                height: 20,
                width: 20,
                position: 'absolute',
                right: 12,
                top: 12,
              }}
              source={require('../../assets/images/calendar.png')}
            />
          </Pressable>
        </View>
        <Text style={{ marginTop: 30 }} fontSize={16} regular bold>
          Time
        </Text>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#A7A7A7',
              marginTop: 8,
              width: 130,
              height: 46,
              borderRadius: 8,
              backgroundColor: '#FBFBFB',
            }}
            onPress={() => showTimePickerStart()}
          >
            <TextInput
              style={{
                width: 343,
                height: 46,
                padding: 12,
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
                color: 'black',
              }}
              editable={false}
              value={startTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
              autoCorrect={true}
              placeholder='Start'
              placeholderTextColor='#D3D3D3'
            />
          </Pressable>

          <View
            style={{ marginLeft: 30, height: 1, width: 18, borderWidth: 2 }}
          ></View>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#A7A7A7',
              marginTop: 8,
              marginLeft: 31,
              width: 130,
              height: 46,
              borderRadius: 8,
              backgroundColor: '#FBFBFB',
            }}
            onPress={() => showTimePickerEnd()}
          >
            <TextInput
              style={{
                padding: 12,
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
                color: 'black',
              }}
              editable={false}
              value={EndTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
              autoCorrect={true}
              placeholder='End'
              placeholderTextColor='#D3D3D3'
            />
          </Pressable>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text fontSize={16} regular bold>
            Status
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#A7A7A7',
              marginTop: 8,
              borderRadius: 8,
              backgroundColor: '#FBFBFB',
            }}
          >
            {/* <TextInput
              value={Status}
              onChangeText={(val) => {
                setStatus(val);
              }}
              placeholder='Enter Task Status'
              placeholderTextColor='#D3D3D3'
              style={{
                width: 343,
                height: 46,
                padding: 12,
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
              }}
            /> */}
            <Picker
              selectedValue={Status}
              onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
            >
              <Picker.Item label='Present' value='Present' />
              <Picker.Item label='Absent' value='Absent' />
              <Picker.Item label='Leave' value='Leave' />
              <Picker.Item label='Sick' value='Sick' />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text fontSize={16} regular bold>
            Activities
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#A7A7A7',
              marginTop: 8,
              borderRadius: 8,
              backgroundColor: '#FBFBFB',
            }}
          >
            <TextInput
              multiline={true}
              numberOfLines={4}
              value={Description}
              onChangeText={(val) => {
                setDescription(val);
              }}
              placeholder='Enter Task Desc'
              placeholderTextColor='#D3D3D3'
              style={{
                width: 343,
                height: 146,
                padding: 12,
                fontSize: 16,
                FontFamily: Fonts.Nunito.Regular,
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <View style={{ flex:1 }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: '#7BED9F',
                borderRadius: 8,
                paddingVertical: 12,
                alignItems: 'center',
              }}
              onPress={() => {
                // dispatch(addTask(sendTask));
                updateTask();
                navigation.navigate('Main', {
                  screen: 'Task',
                });
                // navigate.navigate('Task')
              }}
            >
              <Text fontSize={16} bold color='#261A31'>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex:1, marginLeft: 20 }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: '#EA8685',
                borderRadius: 8,
                paddingVertical: 12,
                alignItems: 'center',
              }}
              onPress={() => {
                // dispatch(addTask(sendTask));
                deleteTask();
                navigation.navigate('Main', {
                  screen: 'Task',
                });
                // navigate.navigate('Task')
              }}
            >
              <Text fontSize={16} bold color='#261A31'>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateScreen;
