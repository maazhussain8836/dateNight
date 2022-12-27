import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState(null);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#24202F',
        padding: '5%',
        justifyContent: 'space-between',
      }}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Entypo
            name={'cross'}
            color={'#FFF'}
            size={30}
            onPress={()=>navigation.goBack()}
            style={{position: 'absolute', left: 0}}
          />
          <Text style={styles.sHead}>Forgot Password</Text>
        </View>
        <View
          style={{alignItems: 'center', marginVertical: '5%', padding: '3%'}}>
          <Text style={{color: '#C2C2C2', fontSize: 12}}>
            Please enter your email address or Phone Number to change your
            Password
          </Text>
        </View>
        <View>
          <Input
            placeholder={'Email Address'}
            value={email}
            secureTextEntry={false}
            setValue={setEmail}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
          <CustomButton text={'Save'} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
          style={{
            marginTop: '5%',
            width: '20%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Text
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: '500',
              color: '#FFFFFF',
              fontSize: 16,
            }}>
            Cancel
          </Text>
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
  },
});
export default ForgotPass;
