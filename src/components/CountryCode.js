import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import MaskInput from 'react-native-mask-input';
const CountryCode = () => {
    
    const [phone, setPhone] = useState('');
  return (
    <View >
         <MaskInput
      value={phone}
      onChangeText={(masked, unmasked) => {
        setPhone(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={['(','+','1',')', /\d/, /\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
    />
    </View>
  )
}

export default CountryCode