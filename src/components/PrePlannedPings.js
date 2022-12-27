import { View, Text, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity, FlatList,Modal } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient';
import AppContext from './AppContext';
export const SLIDER_WIDTH = Dimensions.get('window').width + 150
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.2)
import Entypo  from 'react-native-vector-icons/Entypo';

const PrePlannedPings = () => {
  const [modalVisibleBuyPings, setModalVisibleBuyPings] = useState(false);
    // const [dateNo, setDateNo] = useState(1)
    // const context = useContext(AppContext);
 const data=[
     {
    id:1,
    text:'Pre-planned' 
 },
 {
    id:2,
    text:'Pre-planned' 
 },
 {
    id:3,
    text:'Pre-planned' 
 },
 {
    id:4,
    text:'Pre-planned' 
 },
 
]

//  useEffect(() => {
//   setDateNo(dateNo+1)
//  context.prePlanDates.push(data)
//  console.log(context.prePlanDates,' prePlanDates pings')
//  }, [])
 
 console.log(data,'dataaaaaaaaaaa')
const renderItem=({item,index})=>{
    console.log(item.text,'text')
    console.log(item.id,'id')
    return(
        <View style={{marginHorizontal:15}}>
          
          <Modal
        style={{}}
        animationType="fade"
        transparent={true}
        visible={modalVisibleBuyPings}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleQuit(!modalVisibleBuyPings);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#000000e0',
          }}>
          <LinearGradient
            colors={['#FE6F6F', '#E20303']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.ModalCounter}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                textAlign: 'center',
                marginBottom: '8%',
                // paddingBottom: '10%',
              }}>
              This Ping is currently locked would you like to permanently unlocked it for just $0.99 ?
            </Text>
         
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingHorizontal: '5%',
                marginTop: '10%',
              }}>
              <TouchableOpacity onPress={() => setModalVisibleBuyPings(false)}>
                <Text style={{color: '#FFF', fontSize: 20}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisibleBuyPings(false)}>
                <Text style={{color: '#FFF', fontSize: 20}}>No Thanks</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Modal>
            <TouchableOpacity onPress={()=>setModalVisibleBuyPings(true)}>
        <LinearGradient colors={[ '#BDBDBD','#D3D3D3']  } 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}  key={index} style={styles.container} >
            <Text style={{color:'#FFF',textAlign:'center',fontWeight:'600'}}>{item.text}</Text>
            <Text style={{color:'#FFF',textAlign:'center',fontWeight:'600'}}>Date #{item.id}</Text>
            <Text style={styles.roundBorder}>
            <Entypo size={13} name={'lock'} color={'#000'} />
            </Text>
      </LinearGradient>
           </TouchableOpacity>
        </View>
      
    )
}
  return (
    <View style={{justifyContent:'flex-start',alignItems:'center'}}>
        
        <FlatList
        
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:89,
        height:89,
        borderRadius:12,
       fontWeight:'bold',
        color:'#FFF',
        fontSize:11,
        alignItems:'center',
        justifyContent:'center',
        
        
      },
      roundBorder:{
        width:16,
        height:16,
        borderRadius:8,
        borderColor:'#FFF',
        // borderWidth:1,
        backgroundColor:'#FFF',
        position:'absolute',
        right:6,
        bottom:6,
        padding:1.2
    },
    ModalCounter: {
      width: '80%',
      height: '30%',
      // backgroundColor: 'red',
      // alignItems: 'center',
      // justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      borderRadius: 25,
      padding: '9%',
    
    },
      
  })
  
export default PrePlannedPings

