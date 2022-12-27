import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CBtnSimple = ({text,backgroundColor}) => {
  return (
    <View style={{...styles.btnV,backgroundColor:backgroundColor}}>
       <Text style={styles.btntext}>{text}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    btnV:{
        // flex:1,
        
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:13,
        padding:22
        
        
        
    },
    btntext:{
        
        fontWeight:'500',
        color:'#FFFFFF',
        fontSize:16,
        textAlign:'center'
        
        
    }
})
export default CBtnSimple