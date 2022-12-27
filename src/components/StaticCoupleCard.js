import { View, Text, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
import AppContext from './AppContext';

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)


const StaticCoupleCard = ({ navigation}) => {
    // const [num, setNum] = useState(0)
//  const [name, setName] = useState(null)
//  const [email, setEmail] = useState(null)
//  const [dob, setDob] = useState(null)
//  const [phoneNum, setPhoneNum] = useState(null)
//  const [img, setImg] = useState(null)
    const data=[
        {
            id:0,
        }, 
        {
          id:1,
      },     
    ]

    // useEffect(() => {
    // setNum(num+1)
    // }, [])
    
  const renderItem=({item, index})=> {
    return (
      <View  style={{paddingHorizontal:'2%'}}>
       <TouchableOpacity 
        //  data.push({id:num})
        //  setNum(num+1)
      // console.log(data)}} 
      >
             <Text style={{ fontSize: 12, color: '#FFF',textAlign:'right' ,marginRight:10}}>Add New Couple +</Text>
        </TouchableOpacity>
        <LinearGradient colors={['#363143', '#363143']}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
           style={{ marginTop: 10,
            borderRadius: 18, 
            marginHorizontal: 10,
            paddingVertical: 10,
            alignItems:'center',
            justifyContent:'center'
             }}  >

          <View style={styles.container}>
            <View style={{
              flex: 2,
              // backgroundColor:'blue',
              alignItems: 'center',
              justifyContent:'center',
              

            }}>
              <Image
                source={require('../assets/images/Path216.png')}
                style={{ width: '45%', height: '45%'}}
                resizeMode='contain'
              />
            </View>

            <View style={{ flex: 3, }}>
              <Text style={{ ...styles.cardD, fontSize: 18,textAlign:'center' }}>Name</Text>
              <Text style={styles.cardD}>Phone Number: </Text>
              <Text style={styles.cardD}>Email: </Text>
              <Text style={styles.cardD}>Date Of Birth:</Text>
            </View>

            <View style={{
              flex: 0.9,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems:'flex-end'
            }}>

              <TouchableOpacity style={{
                backgroundColor: '#FFF',
                width: 30,
                height: 30,
                borderRadius: 15,
              }}>
              </TouchableOpacity>


              <TouchableOpacity  >
                <MaterialCommunityIcons name={'pencil'} color={'#FFF'} size={25} />
              </TouchableOpacity>

              <TouchableOpacity >
                <Icon name={'delete'} color={'#FFF'} size={20} />
              </TouchableOpacity>
            </View>

          </View>
        </LinearGradient>

      <LinearGradient colors={['#363143', '#363143']}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
           style={{ marginTop: 10,
            borderRadius: 18, 
            marginHorizontal: 10,
            paddingVertical: 10,
            alignItems:'center',
            justifyContent:'center'
             }}  >

          <View style={styles.container}>
            <View style={{
              flex: 2,
              // backgroundColor:'blue',
              alignItems: 'center',
              justifyContent: 'center',
              

            }}>
              <Image
                source={require('../assets/images/Path216.png')}
                style={{ width: '45%', height: '45%'}}
                resizeMode='contain'
              />
            </View>

            <View style={{ flex: 3, }}>
            <Text style={{ ...styles.cardD, fontSize: 18,textAlign:'center' }}>Name</Text>
              <Text style={styles.cardD}>Phone Number: </Text>
              <Text style={styles.cardD}>Email:</Text>
              <Text style={styles.cardD}>Date Of Birth:</Text>
            </View>

            <View style={{
              flex: 0.9,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems:'flex-end'
            }}>

              <TouchableOpacity style={{
                backgroundColor: '#FFF',
                width: 30,
                height: 30,
                borderRadius: 15,
              }}>
              </TouchableOpacity>


              <TouchableOpacity  >
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
    fontWeight: 'bold'
  },

})

export default StaticCoupleCard