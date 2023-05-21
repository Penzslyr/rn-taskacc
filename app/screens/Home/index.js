import { View, Text, Button } from 'react-native'
import React from 'react'
import { getStoredState } from 'redux-persist'
import { useSelector } from 'react-redux'

const Home = () => {
  const data = useSelector(state=> state)
  console.log('INI DATA', JSON.stringify(data.dataProfile.dataProfile[0], null, 2))
  return (
    <View style={{ marginTop: 90 }}>
      {/* <Text>Selamat datang, {data.dataProfile.dataProfile[0].nameUser}</Text> */}
      
    </View>
  )
}

export default Home