import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SignIn = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1, backgroundColor: '#24202F'}}>
      <View style={{alignItems: 'center', marginTop: '3%'}}>
        <Image
          style={styles.headImg}
          source={require('../assets/images/Group2.png')}
          resizeMode="contain"
        />
        <Image
          style={{
            height: moderateScale(40, 0.1),
            width: moderateScale(180, 0.1),
          }}
          source={require('../assets/images/DateNight.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', marginVertical: '4%'}}>
        <Text style={styles.sHead}>Sign Into Your Account</Text>
      </View>
      <View style={styles.container}>
        <FontAwesome
          size={20}
          name={'user-o'}
          color={'#FFF'}
          style={styles.icon}
        />
        <MaterialCommunityIcons
          size={20}
          name={'lock-outline'}
          color={'#FFF'}
          style={{position: 'absolute', top: 115, left: 16, zIndex: 1}}
        />
        <View style={{marginBottom: '7%'}}>
          <TextInput
            style={styles.inputText}
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}
            secureTextEntry={false}
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <View style={{marginBottom: '7%'}}>
          <TextInput
            style={styles.inputText}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: '1.5%',
          }}>
          <Switch
            trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
            thumbColor={isEnabled ? '#FFF' : '#00ff00'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Text style={{...styles.forgtP, color: '#FFF'}}>Remember</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPass')}
            style={{justifyContent: 'center', marginLeft: '38%'}}>
            <Text style={{...styles.forgtP}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersProfilePage')}
          style={{marginVertical: '3%', marginHorizontal: '5%'}}>
          <CustomButton text={'Sign In'} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={styles.signUp}> Don`t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{...styles.signUp, color: '#00A8FF'}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '87%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sHead: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'Poppins',
  },
  InputView: {
    marginBottom: '5%',
  },
  headImg: {
    height: moderateScale(80, 0.1),
    width: moderateScale(80, 0.1),
  },
  forgtP: {
    color: '#00A8FF',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'Poppins',
  },
  signUp: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'Poppins',
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: 25,
    left: 16,
  },
  inputText: {
    paddingLeft: 50,
    borderWidth: 1,
    borderRadius: 17,
    fontSize: 16,
    borderColor: '#363143',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#363143',
    width: '100%',
    paddingVertical: '5.5%',
    fontStyle: 'poppins',
    color: '#fff',
  },
});
export default SignIn;
