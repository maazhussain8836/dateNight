import { View, Text,StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'

const CustomButton = ({text}) => {
  return (
    <View >
       <LinearGradient colors={['#FE6F6F',  '#E20303']} 
       start={{x: 0, y: 0}} end={{x: 1, y: 0}}style={styles.btnV}>
       <Text style={styles.btntext}>{text}</Text>
       </LinearGradient> 
    </View>
  )
}

const styles=StyleSheet.create({
    btnV:{
        marginTop:'6%',
        padding:18,
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:12
        
    },
    btntext:{
        
        marginLeft:'auto',
        marginRight:'auto',
        fontWeight:'500',
        color:'#FFFFFF',
        fontSize:16,
        
    }
})
export default CustomButton