import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  Switch,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import CBtnSimple from '../components/CBtnSimple';
import Pings from '../components/Pings';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImgIcon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Input from '../components/Input';
import Cards from '../components/Cards';
import AppContext from '../components/AppContext';
import PrePlannedPings from '../components/PrePlannedPings';
import StaticCoupleCard from '../components/StaticCoupleCard';
import EventCards from '../components/EventCards';
import Accordian from '../components/Accordian';

const data = [{id: 1}];

const Home = ({navigation}) => {
  const [min, setMin] = useState(5);
  const [dob, setDob] = useState(' Date Of Birth');
  const [time, setTime] = useState(' Select Your Time');
  const [zipCode, setZipCode] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [zipCodeModalVisible, setZipCodeModalVisible] = useState(false);
  const [addPersonModalVisible, setAddPersonModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const context = useContext(AppContext);

  const increament = () => {
    if (min <= 55) {
      setMin(5 + min);
    } else {
      setMin(0);
    }
  };
  const decreament = () => {
    if (min >= 5) {
      setMin(min - 5);
    } else {
      setMin(60);
    }
  };

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
  // Modal Function
  const toggleZipCodeModal = () => {
    setZipCodeModalVisible(!zipCodeModalVisible);
  };

  const addNew = () => {
    navigation.navigate('AddPerson');
  };
  useEffect(() => {
    console.log(context.addPerson, 'add person');
  }, []);

  const AddPersonBtn = () => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: '7%', marginTop: '5%'}}
        onPress={addNew}>
        <CustomButton text={'Add Person'} />
      </TouchableOpacity>
    );
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{width: 330, height: 330, marginHorizontal: 10, paddingTop: 15}}>
        <TouchableOpacity style={{marginBottom: '5%'}}>
          <CBtnSimple text={'ADD A MEAL'} backgroundColor={'#80D3FC'} />
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: '5%'}}>
          <CBtnSimple text={'ADD AN ACTIVITY'} backgroundColor={'#44BEFB'} />
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: '5%'}}>
          <CBtnSimple text={'ADD A DESSERT'} backgroundColor={'#0883FB'} />
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: '5%'}}>
          <CBtnSimple text={'ADD DRINKS'} backgroundColor={'#0149FF'} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#000', paddingBottom: '10%'}}>
      <View style={{...styles.sec1}}>
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
          <Text style={{fontSize: 20, color: '#FFF'}}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersProfilePage')}>
          <Ionicons name={'settings-outline'} color={'#FFF'} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={{backgroundColor: '#000', paddingVertical: '6%'}}>
            <Text style={{fontSize: 20, color: '#FFF', textAlign: 'center'}}>
              Choose Your Mode
            </Text>
            <View style={{paddingVertical: 10}}>
              <Accordian />
            </View>
          </View>

          <View style={{backgroundColor: '#4D4D4D', paddingVertical: '8%'}}>
            <Text style={{fontSize: 20, color: '#FFF', textAlign: 'center'}}>
              Pre-Planned Dates
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#FFF',
                textAlign: 'center',
                paddingBottom: '7%',
              }}>
              COMMING SOON!
            </Text>
            <PrePlannedPings />
          </View>
          <View style={{backgroundColor: '#000', paddingVertical: '8%'}}>
            <Text style={{fontSize: 20, color: '#FFF', textAlign: 'center'}}>
              Choose Your Date
            </Text>

            {context.addPerson == true ? <AddPersonBtn /> : null}
            {/* <AddPersonBtn/> */}
            {context.addPerson == false ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddPerson')}
                // style={{width: '18%',marginVertical:5,marginLeft:285}}>
                style={{width: '18%', marginVertical: 5, marginLeft: 'auto'}}>
                <Text style={{fontSize: 12, color: '#FFF'}}>Add New +</Text>
              </TouchableOpacity>
            ) : null}

            <Cards navigation={navigation} />
          </View>

          <View style={{backgroundColor: '#4D4D4D', paddingVertical: '8%'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                textAlign: 'center',
                paddingBottom: '5%',
              }}>
              Add Another Couple
            </Text>
    
            <StaticCoupleCard navigation={navigation} />
          </View>
          <View
            style={{
              ...styles.sec2,
              backgroundColor: '#000',
              paddingBottom: '4%',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                textAlign: 'center',
                paddingBottom: '2%',
              }}>
              Add an Event
            </Text>
     
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#707070',
                  textAlign: 'center',
                  paddingBottom: '2%',
                }}>
                Use Current Location ?
              </Text>
              <Switch
                trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
                thumbColor={isEnabled ? '#FFF' : '#00ff00'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#000',
              alignItems: 'center',
              paddingBottom: '10%',
            }}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{alignItems: 'center'}}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              <EventCards navigation={navigation} />
            </ScrollView>
          </View>

          <View style={{backgroundColor: '#4D4D4D', paddingVertical: '8%'}}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#FFF',
                  textAlign: 'center',
                  paddingBottom: '10%',
                }}>
                Select Your Ping Frequency
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity onPress={decreament}>
                <Text style={styles.increamentBtn}>-</Text>
              </TouchableOpacity>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#FFF', fontSize: 41, textAlign: 'center'}}>
                  {min}
                </Text>
                <Text
                  style={{color: '#FFF', fontSize: 14, textAlign: 'center'}}>
                  min
                </Text>
              </View>
              <TouchableOpacity onPress={increament}>
                <Text style={styles.increamentBtn}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#FFF',
                  textAlign: 'center',
                  paddingTop: '10%',
                  paddingBottom: '5%',
                }}>
                Select Your Pings
              </Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <Pings />
              <PrePlannedPings />
            </ScrollView>
          </View>

          <View style={{...styles.sec2, backgroundColor: '#000'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                textAlign: 'center',
                paddingVertical: '8%',
              }}>
              Schedule Your Date
            </Text>

            {/* <View style={}> */}
            <View>
              {/* <Button title="Show Date Picker" onPress={showDatePicker} color='red' /> */}
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={showDatePicker}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingBottom: '4%',
                }}>
                <Text style={styles.dateView}> {dob}</Text>
                {/* <View style={styles.iconImg}> */}
                <ImgIcon
                  name={'calendar'}
                  size={22}
                  color={'#FFF'}
                  style={styles.icon}
                />
                {/* </View> */}
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
                <Text style={styles.dateView}> {time}</Text>
                {/* <View style={styles.iconImg}> */}
                <ImgIcon
                  name={'clock-o'}
                  size={25}
                  color={'#FFF'}
                  style={styles.icon}
                />
                {/* </View> */}
              </TouchableOpacity>
            </View>
            {/* </View> */}
            <TouchableOpacity onPress={() => navigation.navigate('DateDone')}>
              <CustomButton text={'Send Invitation'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: '#4D4D4D',
    // position:'relative'
    // justifyContent:'center',
    // alignItems:'center'
  },
  sec1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#363143',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // height:'10%',
    padding: '5%',
    // alignItems:'center'
  },
  sec2: {
    // borderWidth:1,
    // borderColor:'#FFF',
    justifyContent: 'center',
    backgroundColor: '#4D4D4D',
    // height:'28%',
    // flex:1,
    paddingHorizontal: '7%',
    paddingTop: '3%',
    paddingBottom: '18%',
    // alignItems:'center'
  },
  increamentBtn: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#FF2B25',
    color: '#FFF',
    fontSize: 41,
    alignItems: 'center',
    textAlign: 'center',
  },
  dateView: {
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
    color: '#fff',
    // zIndex:1
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    right: 20,
    // left: 40
  },
  containerCard: {
    marginTop: '5%',
    // backgroundColor: 'red',
    borderRadius: 15,
    width: '100%',
    paddingBottom: '3%',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    paddingTop: '3%',
    // borderWidth:1,
    // borderColor:'#FFF',
    // paddingVertical:'10%',
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  nameD: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    // borderWidth:1,borderColor:'#000',
    textAlign: 'left',
  },
  cardD: {
    color: '#FFFFFF',
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 10,
    alignItems: 'flex-start',
    // borderWidth:1,borderColor:'#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
export default Home;
