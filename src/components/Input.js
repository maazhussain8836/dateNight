import { View, Text, TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react'


const Input = ({placeholder,value,setValue,secureTextEntry,keyboardType,onPressIn}) => {
    // const [value,setValue]=useState(null)
    
  return (
      
    <View >
      <TextInput  style={style.inputText}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor='#FFFFFF'
      
      onPressIn={onPressIn}
      />
    </View>
  )
}
const style=StyleSheet.create({
    inputText:{
      paddingLeft:'6%',
      borderWidth:1,
      borderRadius:17,
      fontSize:16,
      borderColor:'#363143',
      marginLeft:'auto',
      marginRight:'auto',
      backgroundColor:'#363143',
      width:'100%',
      paddingVertical:'4%',
      fontStyle:'poppins',
      color:'#fff'
      
      
    }
})
export default Input