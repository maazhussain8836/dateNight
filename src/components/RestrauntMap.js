import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from "react-native-maps"
import { useState } from 'react';
const RestrauntMap = () => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <View style={styles.container}>
    {/*Render our MapView*/}
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      //onRegionChangeComplete runs when the user stops dragging MapView
      onRegionChangeComplete={(region) => setRegion(region)}
    />
     {/*Display user's current region:*/}
     <Text style={{fontSize:20,color:'#000'}}>Current latitude: {region.latitude}</Text>
    <Text style={{fontSize:20,color:'#000'}}>Current longitude: {region.longitude}</Text>
    </View>
  )
}
//create our styling code:
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
export default RestrauntMap