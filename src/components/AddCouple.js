import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Input from './Input'
import { moderateScale } from 'react-native-size-matters';
import CustomButton from './CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import ImgIcon from 'react-native-vector-icons/FontAwesome'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import AppContext from './AppContext';

const AddCouple = ({ navigation , route}) => {
    console.log(route,"jkg");
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [mobNum, setMobNum] = useState(null)
    const [dob, setDob] = useState('Birth Date')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [img, setImg] = useState(null)
    const [borderA,setBorderA]=useState(false)
    const [borderB,setBorderB]=useState(false)
    const [borderC,setBorderC]=useState(false)
    const [borderD,setBorderD]=useState(false)
    const [borderE,setBorderE]=useState(false)
    const [boxGradient1,setBoxGradient1]=useState(null)
    const [boxGradient2,setBoxGradient2]=useState(null)


    const context = useContext(AppContext);

    useEffect(() => {
    console.log(context.personDetails,'context data');
  }, []);
    const gradientCol=[
        {
            A1:'#FB6280',
            A2:'#F21C76',
            B1:'#0574BE',
            B2:'#74C5FA',
            C1:'#00BC89',
            C2:'#74FACC',
            D1:'#8265FB',
            D2:'#6617F1',
            E1:'#F1D51A',
            E2:'#FBFB65'
        }
    ]
        
    
 
    
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

    const openCamer = (c) => {
        if (c == 'camera') {
            launchCamera({
                width: 300,
                height: 400,
                includeBase64: true,
                cropping: true,
                freeStyleCropEnabled: true,
                // cropperActiveWidgetColor: '#424242',
                // cropperStatusBarColor: '#424242',
                // cropperToolbarColor: '#424242',
            })
                .then(image => {
                    console.log(image.assets[0].uri)
                    setImg(image.assets[0].uri);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else if (c == 'gallery') {
            launchImageLibrary({
                width: 300,
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

    const clearDate = () => {
        setDob('')
        setDob('Birth Date')
    }

    useEffect(() => {
        showBorderA()
        showBorderB()
        showBorderC()
        showBorderD()
        showBorderE()
        
    }, [])
    

  const showBorderA=()=>{
      setBorderA(!borderA)
      setBorderB(false)  
      setBorderC(false)  
      setBorderD(false)  
      setBorderE(false)  
      
      setBoxGradient1(gradientCol[0].A1)
      setBoxGradient2(gradientCol[0].A2)
      console.log(boxGradient1,boxGradient2)
  }
  const showBorderB=()=>{
    setBorderB(!borderB)
    setBorderA(false)  
    setBorderC(false)  
    setBorderD(false)  
    setBorderE(false)
    
    setBoxGradient1(gradientCol[0].B1)
    setBoxGradient2(gradientCol[0].B2)
    console.log(boxGradient1,boxGradient2)
}
const showBorderC=()=>{
    setBorderC(!borderC)
    setBorderB(false)  
    setBorderA(false)  
    setBorderD(false)  
    setBorderE(false)
    
    setBoxGradient1(gradientCol[0].C1)
    setBoxGradient2(gradientCol[0].C2)
    console.log(boxGradient1,boxGradient2)
}
const showBorderD=()=>{
    setBorderD(!borderD)
    setBorderB(false)  
    setBorderC(false)  
    setBorderA(false)  
    setBorderE(false)
    
    setBoxGradient1(gradientCol[0].D1)
    setBoxGradient2(gradientCol[0].D2)
    console.log(boxGradient1,boxGradient2)
}
const showBorderE=()=>{
    setBorderE(!borderE)
    setBorderB(false)  
    setBorderC(false)  
    setBorderD(false)  
    setBorderA(false)
    
    setBoxGradient1(gradientCol[0].E1)
    setBoxGradient2(gradientCol[0].E2)
    console.log(boxGradient1,boxGradient2)
}



// const [idCounter, setIdCounter] = useState(1)

// const onSave=()=>{
//     let couple={
//         id:Math.floor(Math.random() * 100),
//         couple1 : {
//             email:email,
//             dob:dob,
//             img:img,
//             name:name,
//             mobNum:mobNum,
//             boxGradient1:boxGradient1,
//             boxGradient2:boxGradient2
//         },
//          couple2 : {
//             email:email,
//             dob:dob,
//             img:img,
//             name:name,
//             mobNum:mobNum,
//             boxGradient1:boxGradient1,
//             boxGradient2:boxGradient2
//         }
//     }
     
//     // setIdCounter(idCounter+1)
//    context.coupleDetails.push(couple)
//    console.log(context.coupleDetails)

//     navigation.navigate('CoupleCard', {navigation})
//     context.setAddCouple(false)
//     context.setAddNewCoupleCard(true)
// }

    return (
        <View style={{ backgroundColor: '#24202F', flex: 1 }}>


            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginVertical: '5%' }}>
                <Icon onPress={()=>navigation.goBack()} name={'cross'} color={'#FFF'} size={30} style={{ position: 'absolute', left: 10 }} />
                <Text style={styles.sHead}>Add Date Info</Text>
            </View>
            <View style={styles.ImgV}>
                {img &&
                    <Image source={{ uri: img }}
                        style={styles.headImg}
                        resizeMode='contain' />

                }

                <ImgIcon size={50} name={'user-o'} color={'#FFF'} style={styles.icon} />
            </View>

            <TouchableOpacity onPress={() => { openCamer('camera') }} style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#0090FF', textDecorationLine: 'underline' }}>Take a Photo</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => { openCamer('gallery') }} style={{ alignItems: 'center', marginVertical: '3%' }}>
                <Text style={{ fontSize: 14, color: '#FFF' }}>Upload Photo</Text>
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
                <View style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    borderWidth: 1,
                    borderRadius: 17,
                    //   fontSize: 16,
                    borderColor: '#363143',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: '#363143',
                    width: '100%',
                    paddingVertical: '6.5%',
                    //   fontStyle: 'poppins',
                }}>
                    <TouchableOpacity onPress={showDatePicker}>
                        <Text style={{ fontSize: 16, color: '#FFF', fontFamily: 'poppins' }}>  {dob}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clearDate}>
                        <Text style={{ fontSize: 16, color: '#FFF', fontFamily: 'poppins', marginRight: '3%' }} >  Clear</Text>
                    </TouchableOpacity>
                </View>

                <View style={{display:'flex',alignItems:'center',justifyContent:'center',marginVertical:'5%'}}>
                    <Text style={{fontSize:16,color:'#FFF',fontFamily:'poppins'}}>Profile Background Color</Text>
                </View>
                <View style={styles.bgView}>
                    <TouchableOpacity style={styles.bg} onPress={showBorderA} >
                        <LinearGradient colors={[gradientCol[0].A1,gradientCol[0].A2]}
                            style={[borderA==true?styles.activeBorder:styles.nonActiveBorder]}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bg} onPress={showBorderB} >
                        <LinearGradient colors={[gradientCol[0].B1,gradientCol[0].B2]}
                            style={[borderB==true?styles.activeBorder:styles.nonActiveBorder]}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bg} onPress={showBorderC} >
                        <LinearGradient colors={[gradientCol[0].C1,gradientCol[0].C2]}
                            style={[borderC==true?styles.activeBorder:styles.nonActiveBorder]}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bg} onPress={showBorderD}>
                        <LinearGradient colors={[gradientCol[0].D1,gradientCol[0].D2]}
                            style={[borderD==true?styles.activeBorder:styles.nonActiveBorder]}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bg} onPress={showBorderE} >
                        <LinearGradient colors={[gradientCol[0].E1,gradientCol[0].E2]}
                            style={[borderE==true?styles.activeBorder:styles.nonActiveBorder]}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                        </LinearGradient>
                    </TouchableOpacity>

                </View>


            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{ marginBottom: '3%', marginHorizontal: '8%' }}>
                <CustomButton text={'Save'} />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '22%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%' }}
            onPress={()=>navigation.navigate('Home')}>
                <Text style={{ fontSize: 16, color: '#FFF', textAlign: 'center' }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
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

    dateView:
    {
        borderWidth: 1,
        borderRadius: 17,
        fontSize: 16,
        borderColor: '#363143',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#363143',
        width: '100%',
        paddingVertical: '6.5%',
        fontFamily: 'poppins',
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
        zIndex: 1
        // top:10,
        // left:10
    },
    bg: { 
        // borderWidth: 1,
        //  borderColor: '#000',
          width: 35, 
          height: 35, 
          borderRadius: 10,
           marginRight: '4%' 
        },

    bgView:{
     display: 'flex',
     alignItems: 'center',
      flexDirection: 'row', 
    //   borderWidth: 1,
    //    borderColor: '#FFF',
        marginHorizontal: '5%',
        justifyContent:'center'
     },
     activeBorder:{
         borderWidth:2,
         borderColor:'#FFF',
         width: 35, height: 35,
        borderRadius: 20,
     },
     nonActiveBorder:{
        
        width: 35, height: 35, borderRadius: 10,
    }
})
export default AddCouple