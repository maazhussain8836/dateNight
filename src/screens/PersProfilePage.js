import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImgIcon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import NextDateCard from '../components/NextDateCard';
import ScheduleCards from '../components/ScheduleCards';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDownPicker from 'react-native-dropdown-picker';
import {useRef} from 'react';

const PersProfilePage = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [mobNum, setMobNum] = useState(null);
  const [dob, setDob] = useState('Birth Date');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [img, setImg] = useState(null);
  
  const refRBSheet = useRef();
  // Date Picker Functions
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log(setDatePickerVisibility(true), 'modal open');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log(date);
    setDob(moment(date).format('DD/MM/yy'));
    hideDatePicker();
  };
  // Camera

  const openCamer = c => {
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
          console.log(image.assets[0].uri);
          setImg(image.assets[0].uri);
        })
        .catch(error => {
          console.log(error);
        });
    } else if (c == 'gallery') {
      launchImageLibrary({
        width: 300,
        height: 400,
        cropping: true,
        freeStyleCropEnabled: true,
        saveToPhotos: true,
      })
        .then(image => {
          setImg(image.assets[0].uri);
          console.log(image.assets[0].uri);
          // imageUpload(image);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const openRBsheet = () => {
    refRBSheet.current.open();
    console.log('open RBSheet');
  };
  const closeRBsheet = () => {
    refRBSheet.current.close();
    console.log('close RBSheet');
  };
  // RBSheet Componet
  const RBSheetData = () => {
    const [name, setName] = useState(name);
    const [dob, setDob] = useState('Date of Birth');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [time, setTime] = useState('Select Your Time');
    // const [selectValue, setSelectValue] = useState(null);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [open, setOpen] = useState(false);
  const [valueDropDown, setValueDropDown] = useState(null);
  const [items, setItems] = useState([
    {label: 'Never', value: 'never'},
    {label: '5 Minutes', value: '5 Minutes'},
    {label: 'Hourly', value: 'Hourly'},
    {label: 'Daily', value: 'Daily'},
    {label: 'Weekdays', value: 'Weekdays'},
    {label: 'Weekends', value: 'Weekends'},
    {label: 'Biweekly', value: 'Biweekly'},
    {label: 'Monthly', value: 'Monthly'},
    {label: 'Weekly', value: 'Weekly'},
    {label: 'Every 3 months', value: 'Every 3 months'},
    {label: 'Every 6 months', value: 'Every 6 months'},
  ]);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
      console.log(setDatePickerVisibility(true), 'modal open');
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
      console.log(date);
      setDob(moment(date).format('DD/MM/yy'));
      hideDatePicker();
    };
    const showTimePicker = () => {
      setTimePickerVisibility(true);
      console.log(setTimePickerVisibility(true), 'modal open');
    };

    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };

    const handleConfirmTime = time => {
      console.log(time);
      setTime(moment(time).format('h:mm:ss a'));
      hideTimePicker();
    };

    return (
      <View style={{...styles.container, paddingTop: '2%'}}>
        <View>
          <View style={styles.InputView}>
            <Input
              placeholder={'Name'}
              value={name}
              setValue={setName}
              secureTextEntry={false}
            />
          </View>
          <View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={styles.InputView}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={showDatePicker}>
              <Text style={styles.dateView}>{dob}</Text>
              <ImgIcon
                name={'calendar'}
                size={18}
                color={'#FFF'}
                style={styles.icon2}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* <Button title="Show Date Picker" onPress={showDatePicker} color='red' /> */}
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={showTimePicker}
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingBottom: '4%',
              }}>
              <Text style={styles.dateView}>{time}</Text>
              {/* <View style={styles.iconImg}> */}
              <ImgIcon
                name={'clock-o'}
                size={20}
                color={'#FFF'}
                style={styles.icon2}
              />
              {/* </View> */}
            </TouchableOpacity>
          </View>
          
          <DropDownPicker
            
              style={{...styles.inputText}}
              labelStyle={{color:'#FFF',fontSize:16}}
              placeholder='Select Reminder'
              placeholderStyle={{color:'#FFF',fontSize:16}}
              open={open}
              value={valueDropDown}
              items={items}
              setOpen={setOpen}
              setValue={setValueDropDown}
              setItems={setItems}
              dropDownDirection="TOP"
            />
          
        
          
          <TouchableOpacity
            onPress={closeRBsheet}
            style={{
              width: '70%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '5%',
            }}>
            <CustomButton text={'Save'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //   return main Components
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#24202F',
          paddingBottom: '40%',
          paddingTop: '5%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '5%',
          }}>
          <Entypo
            onPress={() => navigation.navigate('Home')}
            name={'cross'}
            color={'#FFF'}
            size={30}
            style={{position: 'absolute', left: 0}}
          />
          <Text style={styles.sHead}>Personal Profile Details</Text>
        </View>
        <View style={styles.ImgV}>
          {img && (
            <Image
              source={{uri: img}}
              style={styles.headImg}
              resizeMode="contain"
            />
          )}

          <ImgIcon
            size={50}
            name={'user-o'}
            color={'#FFF'}
            style={styles.icon}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            openCamer('camera');
          }}
          style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 14,
              color: '#0090FF',
              textDecorationLine: 'underline',
            }}>
            Take a Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            openCamer('gallery');
          }}
          style={{alignItems: 'center', marginVertical: '3%'}}>
          <Text style={{fontSize: 14, color: '#FFF'}}>Upload Photo</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.InputView}>
            <Input
              placeholder={'Full Name'}
              secureTextEntry={false}
              value={name}
              setValue={setName}
            />
          </View>
          <View style={styles.InputView}>
            <Input
              placeholder={'Mobile Number'}
              secureTextEntry={false}
              value={mobNum}
              setValue={setMobNum}
            />
          </View>
          <View style={styles.InputView}>
            <Input
              placeholder={'Email'}
              secureTextEntry={false}
              value={email}
              setValue={setEmail}
            />
          </View>
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
        </View>
        <View style={{alignItems: 'center', paddingBottom: '5%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePass')}>
            <Text
              style={{
                ...styles.signUp,
                color: '#00A8FF',
                textDecorationLine: 'underline',
              }}>
              {' '}
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{marginBottom: '3%', marginHorizontal: '8%'}}>
          <CustomButton text={'Save'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openRBsheet}
          style={{width: '18%', marginLeft: 'auto', marginVertical: '2%'}}>
          <Text style={{fontSize: 12, color: '#FFF'}}>Add New +</Text>
        </TouchableOpacity>
        <View>
          <NextDateCard />
        </View>
        <View style={{padding: '4%', marginVertical: '3%'}}>
          <Text style={{...styles.sHead}}>Scheduled Dates </Text>
        </View>
        <View>
          <ScheduleCards />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{marginVertical: '3%', marginHorizontal: '8%'}}>
          <CustomButton text={'Logout'} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#534C64',
        }}>
        {/* <Button title="OPEN BOTTOM SHEET"/> */}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: '#000000e0',
            },
            draggableIcon: {
              backgroundColor: '#FFF',
            },
            container: {
              backgroundColor: '#534C64',
              alignItems: 'center',
              height: '57%',
              //   borderWidth: 3,
              //   borderColor: '#FFF',
            },
          }}>
          <RBSheetData />
        </RBSheet>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
        paddingVertical:'5%',
        fontStyle:'poppins',
        color:'#fff'
        
        
      },
  container: {
    width: '80%',
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

  dateView: {
    paddingLeft: '6%',
    borderWidth: 1,
    borderRadius: 17,
    fontSize: 16,
    borderColor: '#363143',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#363143',
    width: '100%',
    paddingVertical: '5%',
    fontStyle: 'poppins',
    color: '#fff',
  },
  ImgV: {
    width: '25%',
    height: '7%',
    borderRadius: 20,
    marginBottom: '4%',
    borderColor: '#FFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#363143',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    // zIndex: 1,
    top: 10,
    left: 24,
  },
  icon2: {
    position: 'absolute',
    zIndex: 1,
    top: 17,
    right: 20,
    // left: 40
  },
  headImg: {
    height: moderateScale(80, 0.8),
    width: moderateScale(100, 0.1),
    position: 'absolute',
    borderRadius: 20,
    zIndex: 1,
    // top:10,
    // left:10
  },
});
export default PersProfilePage;
