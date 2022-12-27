import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export const SLIDER_WIDTH = Dimensions.get('window').width + 150;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.2);

const Pings = () => {
  const [freePing, setFreePing] = useState('Compliment your date');
  const data = [
    {
      id: 0,
      text: freePing,
      check: true,
    },
    {
      id: 1,
      text: freePing,
      check: false,
    },
    {
      id: 2,
      text: freePing,
      check: false,
    },
    {
      id: 3,
      text: freePing,
      check: false,
    },
    {
      id: 4,
      text: freePing,
      check: false,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal: 15}}>
        <TouchableOpacity
          onPress={() => {
            item['check'] = !item['check'];
            console.log(item?.check);
          }}
          style={[
            styles.container,
            {backgroundColor: item?.check ? 'yellow' : 'blue'},
          ]}>
          <Text style={{color: '#FFF', textAlign: 'center'}}>{item?.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 89,
    height: 89,
    borderRadius: 12,
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Pings;
