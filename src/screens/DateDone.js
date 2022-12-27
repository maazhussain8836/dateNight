import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const DateDone = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#24202F',
        padding: '5%',
        justifyContent: 'space-between',
      }}>
      <View>
        <Image
          source={require('../assets/images/5.png')}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </View>

      <View>
        <Image
          source={require('../assets/images/Group252.png')}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Text
          style={{
            ...styles.sHead,
            paddingTop: '10%',
            paddingBottom: '5%',
            fontSize: 40,
          }}>
          You're all set!
        </Text>
        <Text style={{...styles.sHead, color: '#B7B7B7', fontSize: 15}}>
          Your date is all planned out! We’ll send you a reminder 30 minutes
          before its time for your date to start.
        </Text>
      </View>
      <View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Home')}
          style={{
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 18,
            borderRadius: 12,
            backgroundColor: '#FFF',
          }}>
          <Text style={styles.btntext}>Done for Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('CasualMode')}
          style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
          <CustomButton text={`Let's Play`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sHead: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'Poppins',
    textAlign: 'center',
  },
  btntext: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '500',
    color: '#E71717',
    fontSize: 16,
  },
});
export default DateDone;
