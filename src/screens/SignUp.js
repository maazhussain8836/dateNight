import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import { moderateScale } from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import ImgIcon from 'react-native-vector-icons/FontAwesome'
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';
const SignUp = ({navigation}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [mobNum, setMobNum] = useState(null)
    const [dob, setDob] = useState('Birth Date')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [img,setImg]=useState(null)
    // Date Picker Functions
    const showDatePicker = () => {
        setDatePickerVisibility(true);
        console.log(setDatePickerVisibility(true), 'modal open')
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log(date)
        setDob(moment(date).format('DD/MM/yy'));
        hideDatePicker();
    };
    // Camera 

    const openCamer=(c)=>{
        if(c=='camera'){
            launchCamera({
                width: 400,
                height: 400,
              includeBase64:true,
              cropping: true,
              freeStyleCropEnabled: true,
              // cropperActiveWidgetColor: '#424242',
              // cropperStatusBarColor: '#424242',
              // cropperToolbarColor: '#424242',
            })
              .then(image => {
                console.log ( image.assets[0].uri)
                setImg(image.assets[0].uri);
              })
              .catch(error => {
                console.log(error);
              });
        }
        else if(c=='gallery'){
            launchImageLibrary({
                width: 400,
                height: 400,
                cropping: true,
                freeStyleCropEnabled: true,
                saveToPhotos: true
              })
                .then(image => {
                  setImg(image.assets[0].uri);
                    console.log(image.assets[0].uri)
                  // imageUpload(image);
                })
                .catch(error => {
                  console.log(error)
                });
        }
      };
      
    return (
        <ScrollView >
              <View style={{  backgroundColor: '#24202F',paddingBottom:'40%' }} >


<View style={{ alignItems: 'center', marginVertical: '5%' }}>
    <Text style={styles.sHead}>Sign Up</Text>
</View>
<View style={styles.ImgV}>
    {img &&
        <Image source={{ uri: img }}
            style={styles.headImg}
            />

    }

    <ImgIcon size={50} name={'user-o'} color={'#FFF'} style={styles.icon} />
</View>

    <TouchableOpacity onPress={()=>{openCamer('camera')}} style={{ alignItems: 'center'}}>
    <Text style={{fontSize:14,color:'#0090FF',textDecorationLine:'underline'}}>Take a Photo</Text>
    </TouchableOpacity>


<TouchableOpacity onPress={()=>{openCamer('gallery')}} style={{ alignItems: 'center', marginVertical: '3%'}}>
    <Text style={{fontSize:14,color:'#FFF'}}>Upload Photo</Text>
    </TouchableOpacity>

<View style={styles.container}>

    <View style={styles.InputView}>
        <Input placeholder={'Full Name'}
            secureTextEntry={false}
            value={name}
            setValue={setName}
        />
    </View >
    <View style={styles.InputView}>
        <Input placeholder={'Mobile Number'}
            secureTextEntry={false}
            value={mobNum}
            setValue={setMobNum}
        />
    </View >
    <View style={styles.InputView}>
        <Input placeholder={'Email'}
            secureTextEntry={false}
            value={email}
            setValue={setEmail}
        />
    </View >
    <View>
        {/* <Button title="Show Date Picker" onPress={showDatePicker} color='red' /> */}
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
    </View>
    <View style={styles.InputView}>
        <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.dateView}>{dob}</Text>
        </TouchableOpacity>
    </View>


    <View style={styles.InputView}>
        <Input placeholder={'Password'}
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
        />
    </View>
</View>

<TouchableOpacity 
onPress={()=>navigation.navigate('PersProfilePage')}
style={{ marginBottom: '3%', marginHorizontal: '10%' }}>
    <CustomButton text={'Sign Up'} />
</TouchableOpacity>
<View style={{ alignItems: 'center',paddingTop:'5%',display:'flex',flexDirection:'row',justifyContent:'center' }}>
    <Text style={styles.signUp}> Already have an account?</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
        <Text style={{ ...styles.signUp, color: '#00A8FF', }}> Sign In</Text>
    </TouchableOpacity>
    
</View>
</View>

        </ScrollView>
       )
}
const styles = StyleSheet.create({
    container: {
        width: '79%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    sHead: {
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'Poppins',

    },
    InputView: {
        marginBottom: '5%',
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
 
    dateView:
    {   
        paddingLeft:'6%',
        borderWidth: 1,
        borderRadius: 17,
        fontSize: 16,
        borderColor: '#363143',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#363143',
        width: '100%',
        paddingVertical: '6.5%',
        fontStyle: 'poppins',
        color: '#fff'
    },
    ImgV:
    {

        width: '25%',
        height: '11%',
        borderRadius: 20,
        marginBottom: '4%',
        borderColor: '#FFF',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#363143',
        position: 'relative'

    },
    icon: {
        position: 'absolute',
        // zIndex: 1,
        top: 14,
        left: 27
    },
    headImg: {
        height: moderateScale(80, 0.8),
        width: moderateScale(100, 0.1),
        position: 'absolute',
        borderRadius: 20,
        zIndex: 1,
        resizeMode:'contain'
        // top:10,
        // left:10
    },
})
export default SignUp