import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import openMap from 'react-native-open-maps';
// import Map from './Map';
const data = [
  {
    id: 1,
    filter: 'Add A Meal Filter',
    color: '#80D3FC',
  },
  {
    id: 2,
    filter: 'Add An Activity Filter',
    color: '#44BEFB',
  },
  {
    id: 3,
    filter: 'Add A Dessert Filter',
    color: '#0883FB',
  },
  {
    id: 4,
    filter: 'Add Drinks Filter',
    color: '#0149FF',
  },
];
const EventCards = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [showRes, setShowRes] = useState(true);
 const openRecentLocation=()=>{
    openMap({latitude: 24.8601, longitude: 67.0637});
   console.log('map Open')
 }


  const RestrauntsName=()=>{
    return(
      <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>
          Breakfast food
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>Buffets</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>
          Burgers & Fries
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>
          Chinese Food
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>
          Fast Food
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>
          Fine Dining
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>Fondue</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 7,
          alignItems: 'center',
        }}>
        <Switch
          trackColor={{false: '#4D4D4D', true: '#4D4D4D'}}
          thumbColor={isEnabled ? '#FFF' : '#00ff00'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{...styles.nameD, paddingLeft: 10}}>
          Greek foodd
        </Text>
      </View>
    </ScrollView>


    )
  };
  const RestrauntsLocation=()=>{
    return(
     
      <ScrollView>
      <View style={styles.restrauntV}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        //   padding: 7,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}></TouchableOpacity>
        <Text
          style={{...styles.nameD, paddingLeft: 10, color: '#EDCB01'}}>
          Spicy Pizza Fries
        </Text>
        <TouchableOpacity
        onPress={openRecentLocation}
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={'red'}
            size={20}
            style={{right:0,left:1,top:1}}
          />
        </TouchableOpacity>
      </View>

      </View>
      <View style={styles.restrauntV}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        //   padding: 7,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}></TouchableOpacity>
        <Text
          style={{...styles.nameD, paddingLeft: 10, color: '#EDCB01'}}>
          Spicy Pizza Fries
        </Text>
        <TouchableOpacity
        onPress={openRecentLocation}
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={'red'}
            size={20}
            style={{right:0,left:1,top:1}}
          />
        </TouchableOpacity>
      </View>

      </View>
      <View style={styles.restrauntV}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        //   padding: 7,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}></TouchableOpacity>
        <Text
          style={{...styles.nameD, paddingLeft: 10, color: '#EDCB01'}}>
          Spicy Pizza Fries
        </Text>
        <TouchableOpacity
        onPress={openRecentLocation}
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={'red'}
            size={20}
            style={{right:0,left:1,top:1}}
          />
        </TouchableOpacity>
      </View>

      </View>
      <View style={styles.restrauntV}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        //   padding: 7,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}></TouchableOpacity>
        <Text
          style={{...styles.nameD, paddingLeft: 10, color: '#EDCB01'}}>
          Spicy Pizza Fries
        </Text>
        <TouchableOpacity
        onPress={openRecentLocation}
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            borderColor: '#FFF',
            backgroundColor: '#FFF',
          }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={'red'}
            size={20}
            style={{right:0,left:1,top:1}}
          />
        </TouchableOpacity>
      </View>

      </View>
    </ScrollView>
    )
  }
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            marginTop: 10,
            borderRadius: 18,
            marginHorizontal: 10,
            // paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#363143',
          }}>
          <View style={styles.container}>
            {/* <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}> */}
            <View style={{...styles.Vhead, backgroundColor: item.color}}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={'delete-outline'}
                  color={'#FFF'}
                  size={33}
                />
              </TouchableOpacity>
              <Text style={styles.nameD}>{item.filter}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFF',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}></TouchableOpacity>
            </View>
               {showRes==true?<RestrauntsName/>:<RestrauntsLocation/>} 
                
            <View style={{...styles.Vhead}}>
              <TouchableOpacity
                style={{...styles.btnBox, backgroundColor: '#0149FF'}}>
                <Image
                  source={require('../assets/images/Group563.png')}
                  style={{
                    width: 32,
                    height: 32,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>setShowRes(false)}
                style={{...styles.btnBox, backgroundColor: '#0883FB'}}>
                <Image
                  source={require('../assets/images/Group561.png')}
                  style={{
                    width: 32,
                    height: 32,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.btnBox, backgroundColor: '#44BEFB'}}>
                <Image
                  source={require('../assets/images/Group562.png')}
                  style={{
                    width: 32,
                    height: 32,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* </View> */}
          </View>
        </View>
      </View>
    );
  };
  return (
    // <View style={{alignItems:'center',justifyContent:'center'}}>

    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    height: 330,
    width: 330,
    marginHorizontal: 10,
  },

  nameD: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    // paddingLeft: 10,
    // paddingTop: 10,
    // borderWidth:1,borderColor:'#000',
  },
  cardD: {
    color: '#FFFFFF',
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 10,
    alignItems: 'flex-start',
    // borderWidth:1,borderColor:'#000',
    textAlign: 'left',
    fontWeight: '600',
  },
  Vhead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
    marginHorizontal: -10,
  },
  btnBox: {
    width: 60,
    height: 60,
    borderRadius: 17,
  },
  restrauntV: {
    // borderWidth: 1,
    padding: '4.5%',
    backgroundColor: '#36454F',
    borderRadius: 14,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'5%'
  },
});

export default EventCards;
