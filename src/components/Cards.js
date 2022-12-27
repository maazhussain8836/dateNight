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
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from '@react-navigation/native';
import AppContext from './AppContext';

export const SLIDER_WIDTH = Dimensions.get('window').width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const Cards = ({navigation}) => {
  const context = useContext(AppContext);
  var cardData = context.personDetails;
  console.log(navigation, 'jkhkhkjh');
  const [selectedId, setSelectedId] = useState();
  // const [selectedItem, setSelectedItem] = useState(null);

  const onRemove = id => {
    context.setPersonDetails(cardData.filter(item => item.id !== id));
    console.log(cardData, 'deleteeeeeeeeee');
    console.log(cardData.length, 'length of card');
    if (cardData.length == 1) {
      context.setAddPerson(true);
    } else {
      context.setAddPerson(false);
    }
  };
 
 
  console.log(cardData, 'person Data');

  const renderItem = ({item, index}) => {
    return (
      <View>
        <LinearGradient
          colors={[item.boxGradient1, item.boxGradient2]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            marginTop: 10,
            borderRadius: 18,
            marginHorizontal: 10,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.container}>
            <View
              style={{
                flex: 2,
                // backgroundColor:'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{uri: item.img}}
                style={{width: '90%', height: '55%', borderRadius: 15}}
                resizeMode="contain"
              />
            </View>

            <View style={{flex: 3}}>
              <Text
                style={{...styles.cardD, fontSize: 18, textAlign: 'center'}}>
                {item.name}
              </Text>
              <Text style={styles.cardD}>Phone Number: {item.mobNum}</Text>
              <Text style={styles.cardD}>Email: {item.email}</Text>
              <Text style={styles.cardD}>Date Of Birth:{item.dob}</Text>
            </View>

            <View
              style={{
                flex: 0.9,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() =>setSelectedId(item.id)}
                style={{
                  backgroundColor: '#FFF',
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                }}> 
    {selectedId==item.id?<View
        style={{
          backgroundColor: 'green',
          width: 23,
          height: 23,
          borderRadius: 12,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>

        </View>:null}
               
              {/* {selectPerson==true?<SelectCard/>:selectPerson==false} */}
                </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddPerson');
                }}>
                <MaterialCommunityIcons
                  name={'pencil'}
                  color={'#FFF'}
                  size={25}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onRemove(item.id)}>
                <Icon name={'delete'} color={'#FFF'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };
  return (
    // <View style={{alignItems:'center',justifyContent:'center'}}>
    <>
      <FlatList
        data={cardData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    height: 150,
    width: 330,
    // marginVertical: 35,
    marginHorizontal: 10,
    flexDirection: 'row',
    // borderRadius: 18,
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
    fontWeight: '600',
  },
});

export default Cards;
