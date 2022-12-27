import { View, Text, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ScheduleCards = ({ navigation}) => {

const data=[
    {
        id:1,
        
},
{
    id:2
},
{
    id:3
},
{
    id:4
}
]
  const renderItem=({item, index})=> {
    
  
    return (
      <View >
        
        <LinearGradient colors={['#534C64', '#534C64']}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
           style={{ marginTop: 10,
            borderRadius: 18, 
            marginHorizontal: 10,
            paddingVertical: 10,
            alignItems:'center',
            justifyContent:'center'
             }}  >
        
          <View style={styles.container}>
    

            <View style={{ flex: 3, }}>
            <Text style={{ ...styles.cardD, fontSize: 18,textAlign:'left' }}>Scheduled Date</Text>
            <Text style={styles.cardD}>Name : Maaz Hussain</Text>
              <Text style={styles.cardD}>Date : 24/07/2000</Text>
              <Text style={styles.cardD}>Time : 05:20 AM</Text>
              
            </View>

            <View style={{
              flex: 0.9,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems:'flex-end'
            }}>

              <TouchableOpacity >
                <MaterialCommunityIcons name={'pencil'} color={'#FFF'} size={25} />
              </TouchableOpacity>

              <TouchableOpacity >
                <Icon name={'delete'} color={'#FFF'} size={20} />
              </TouchableOpacity>

            </View>

          </View>
        </LinearGradient>
       
      </View>

    )

  }
  return (
    // <View style={{alignItems:'center',justifyContent:'center'}}>
    
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    height: 150,
    width: 330,
    // marginVertical: 35,
    marginHorizontal: 10,
    flexDirection: "row",
    // borderRadius: 18,


  },


  nameD: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    // borderWidth:1,borderColor:'#000',
    textAlign: 'left'
  },
  cardD: {
    color: "#FFFFFF",
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 10,
    alignItems: 'flex-start',
    // borderWidth:1,borderColor:'#000',
    textAlign: 'left',
    fontWeight: '600'
  },

})

export default ScheduleCards