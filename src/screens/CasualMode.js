import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Pings from '../components/Pings';
import PrePlannedPings from '../components/PrePlannedPings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CasualMode = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleQuit, setModalVisibleQuit] = useState(false);
  const [min, setMin] = useState(5);
  const [play, setPlay] = useState(true)
  // const [opacity, setOpacity] = useState(1)
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
  const onCancelModal=()=>{
    setMin(5)
    setModalVisible(false)
  }


  return (
    <View style={{flex: 1, backgroundColor: '#24202F'}}>
      {/* <View> */}
      <Modal
        style={{}}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#000000e0',
          }}>
          <LinearGradient
            colors={['#FE6F6F', '#E20303']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.ModalCounter}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                textAlign: 'center',
                marginBottom: '8%',
                // paddingBottom: '10%',
              }}>
              Set Ping Frequency
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={decreament}>
                <Text style={styles.counterBtn}>-</Text>
              </TouchableOpacity>
              <View>
                <Text
                  style={{color: '#FFF', fontSize: 41, textAlign: 'center'}}>
                  {min}
                </Text>
              </View>
              <TouchableOpacity onPress={increament}>
                <Text style={styles.counterBtn}>+</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingHorizontal: '5%',
                marginTop: '10%',
              }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{color: '#FFF', fontSize: 20}}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onCancelModal}>
                <Text style={{color: '#FFF', fontSize: 20}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Modal>

      <Modal
        style={{}}
        animationType="fade"
        transparent={true}
        visible={modalVisibleQuit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleQuit(!modalVisibleQuit);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#000000e0',
          }}>
          <LinearGradient
            colors={['#FE6F6F', '#E20303']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.ModalCounter}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                textAlign: 'center',
                marginBottom: '8%',
                // paddingBottom: '10%',
              }}>
              Are you sure you want to quit your date?
            </Text>
         
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingHorizontal: '5%',
                marginTop: '10%',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{color: '#FFF', fontSize: 20}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisibleQuit(false)}>
                <Text style={styles.NoBtn}>No</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Modal>
      {/* </View> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <View>
          <Text style={{color: '#FFF', fontSize: 20, paddingBottom: 20}}>
            Casual Date Mode
          </Text>
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#74FF82',
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundColor: '#363143',
            borderRadius: 25,
            paddingVertical: '2%',
          }}>
          <Text style={{...styles.textH, fontSize: 20, paddingTop: 20}}>
            Ohhh..
          </Text>
          <Text style={styles.textH}>Truth Or Dare</Text>
          <Text style={{...styles.textH, fontSize: 20}}>Are You Ready?</Text>
          <View
            style={{
              //   borderWidth: 2,
              //   borderColor: '#74FF82',
              width: '85%',
              marginRight: 'auto',
              marginLeft: 'auto',
              backgroundColor: '#FFF',
              borderRadius: 25,
              paddingTop: 10,
              marginVertical: '5%',
            }}>
            <Text style={{padding: '5%', paddingBottom: '30%'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in ther including versions of Lorem Ipsum.
            </Text>
          </View>
        </View>
        <ScrollView style={{paddingTop: '8%'}} horizontal={true}  >
          <Pings />
          <PrePlannedPings />
        </ScrollView>
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '7%',
          paddingTop: '3%',
          // height:68.7,
          backgroundColor: '#000',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity onPress={()=>navigation.navigate('FAQ')}>
        <Text style={{...styles.textH, fontSize: 20, color: '#FFF'}}>FAQ</Text>
          </TouchableOpacity>
        <FontAwesome name={'square'} size={15} color={'#E20303'} onPress={()=>setModalVisibleQuit(true)} />
        {play==true ? <Ionicons name={'play'} size={30} color={'#70FC7E'} onPress={()=>setPlay(false)} />  :
        <Ionicons name={'pause'} size={30} color={'#70FC7E'} onPress={()=>setPlay(true)} /> }
        <Ionicons name={'play-forward'} size={20} color={'#131BFF'} />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{...styles.textH, fontSize: 20, color: '#FFF'}}>
            {min}{'\n '}
            <Text style={{...styles.textH, fontSize: 10, color: '#FFF'}}>
              min
            </Text>{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textH: {
    color: '#74FF82',
    textAlign: 'center',
    fontSize: 40,
  },
  ModalCounter: {
    width: '80%',
    height: '30%',
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 25,
    padding: '9%',
  
  },
  counterBtn: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 41,
    alignItems: 'center',
    textAlign: 'center',
  },
  NoBtn:{
    width: 74,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFF',
    color: '#E20303',
    fontSize: 18,
    paddingTop:10,
    textAlign: 'center',
    
    // justifyContent:'center'
  }
});
export default CasualMode;
