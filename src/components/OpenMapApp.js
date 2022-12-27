import { View, Text, Button } from 'react-native'
import React from 'react'
import openMap from 'react-native-open-maps';


const OpenMapApp = () => {
    
const openLocation=()=>{
    // openMap({ latitude: 24.8601, longitude: 67.0637 })
}    
  return (
    <View>
  <Button
            color={'#bdc3c7'}
            onPress={()=>openMap({latitude: 24.8601, longitude: 67.0637})}
            title="Go to Progressive Square" />
    
    </View>
  )
}

export default OpenMapApp
