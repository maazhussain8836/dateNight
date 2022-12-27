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


const CoupleCard = ({ navigation}) => {
 
  const context = useContext(AppContext);
  var cardData = context.coupleDetails;

  const onRemove = (id) => {
    context.setCoupleDetails(cardData.filter(item => item.id !== id))
    context.setAddNewCoupleCard(false)
    console.log(cardData,'deleteeeeeeeeee')
    
  };
  console.log(cardData, 'couple Data')

  // const editCard = () => {
    
  // }



  const renderItem=({item, index})=> {
    return (
      <View >
       <TouchableOpacity onPress={()=>navigation.navigate('AddCouple')}>
             <Text style={{ fontSize: 12, color: '#000',textAlign:'right' ,marginRight:10}}>Add New Couple +</Text>
        </TouchableOpacity>
        <LinearGradient colors={[item.couple1.boxGradient1, item.couple1.boxGradient2]}
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
                source={{ uri:item.couple1.img }}
                style={{ width: '90%', height: '55%', borderRadius: 15 }}
                resizeMode='contain'
              />
            </View>

            <View style={{ flex: 3, }}>
              <Text style={{ ...styles.cardD, fontSize: 16 }}>{item.couple1.name}</Text>
              <Text style={styles.cardD}>Phone Number:{item.couple1.mobNum} </Text>
              <Text style={styles.cardD}>Email:{item.couple1.email} </Text>
              <Text style={styles.cardD}>Date Of Birth:{item.couple1.dob}</Text>
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

              <TouchableOpacity onPress={()=>onRemove(item.id)}>
                <Icon name={'delete'} color={'#FFF'} size={20} />
              </TouchableOpacity>
            </View>

          </View>
        </LinearGradient>

      <LinearGradient colors={[item.couple2.boxGradient1, item.couple2.boxGradient2]}
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
                source={{ uri:item.couple2.img }}
                style={{ width: '90%', height: '55%', borderRadius: 15 }}
                resizeMode='contain'
              />
            </View>

            <View style={{ flex: 3, }}>
              <Text style={{ ...styles.cardD, fontSize: 16 }}>{item.couple2.name}</Text>
              <Text style={styles.cardD}>Phone Number:{item.couple2.mobNum} </Text>
              <Text style={styles.cardD}>Email:{item.couple2.email} </Text>
              <Text style={styles.cardD}>Date Of Birth:{item.couple2.dob}</Text>
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

              <TouchableOpacity onPress={()=>onRemove(item.id)}>
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
        horizontal={true}
        data={cardData}
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

export default CoupleCard