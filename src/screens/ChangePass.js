import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const ChangePass = ({navigation}) => {
  const [newPass, setNewPass] = useState(null);
  const [conNewPass, setConNewPass] = useState(null);
  const [eye1, setEye1] = useState("eye")
  const [eye2, setEye2] = useState("eye")
  const [secureTextEntry1, setSecureTextEntry1] = useState(false)
  const [secureTextEntry2, setSecureTextEntry2] = useState(false)
  const onShowEye1=()=>{
      if (eye1==='eye') {
          setEye1('eye-with-line')
          setSecureTextEntry1(true)
      }
      else if (eye1==='eye-with-line') {
          setEye1('eye')
          setSecureTextEntry1(false)
      }
  }
  const onShowEye2=()=>{
    if (eye2==='eye') {
        setEye2('eye-with-line')
        setSecureTextEntry2(true)
    }
    else if (eye2==='eye-with-line') {
        setEye2('eye')
        setSecureTextEntry2(false)
    }
}
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
            onPress={() => navigation.navigate('PersProfilePage')}
            name={'cross'}
            color={'#FFF'}
            size={30}
            style={{position: 'absolute', left: 0}}
          />

          <Text style={styles.sHead}>Change Password</Text>
        </View>
        <View style={{marginTop: '15%', marginBottom: '5%'}}>
          <Input
            placeholder={'New Password'}
            value={newPass}
            secureTextEntry={secureTextEntry1}
            setValue={setNewPass}
          />
          <Entypo
            onPress={()=>onShowEye1()}
            name={eye1}
            color={'#FFF'}
            size={20}
            style={{position: 'absolute', right: 10,top:20}}
          />
        </View>
        <View>
          <Input
            placeholder={'Confirm Password'}
            value={conNewPass}
            secureTextEntry={secureTextEntry2}
            setValue={setConNewPass}
          />
           <Entypo
            onPress={()=>onShowEye2()}
            name={eye2}
            color={'#FFF'}
            size={20}
            style={{position: 'absolute', right: 10,top:20}}
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
          onPress={() => navigation.goBack()}
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
export default ChangePass;
