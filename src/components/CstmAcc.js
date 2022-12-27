import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CstmAcc = () => {
  const [mode, setMode] = useState();
  const [selectID, setSelectID] = useState();
  const [iconName, setIconName] = useState('up');

  const data = [
    {
      id: 0,
      title: 'First Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#80D3FC',
      check: false,
    },
    {
      id: 1,
      title: 'Casual Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#44BEFB',
      check: false,
    },
    {
      id: 2,
      title: 'Exclusive Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#0883FB',
      check: false,
    },
    {
      id: 3,
      title: 'Married Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#0149FF',
      check: false,
    },
  ];

  const Accordian = () => {
    const SelectModeView = () => {
      return (
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginLeft: 'auto',
            backgroundColor: '#06BB18',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}></View>
      );
    };
    return (
      <>
        {data.map((item, index) => {
          return (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: item.color,
                  padding: '4%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: 20,
                  width: '93%',
                  flexDirection: 'row',
                  marginTop: '3%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                onPress={() => {
                  setMode(item.id);
                  // item['check']=!item['check']
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 16}}>
                  <AntDesign
                    size={20}
                    color={'#FFFFFF'}
                    name={iconName}
                    style={{}}
                  />
                  {item.title}
                </Text>
                <TouchableOpacity
                  onPress={() => setSelectID(item.id)}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    // borderWidth: 1,
                    backgroundColor: '#FFF',
                  }}>
                  {selectID == item.id ? <SelectModeView /> : null}
                </TouchableOpacity>
              </TouchableOpacity>
              <View
                style={[
                  mode == item.id ? {display: 'flex'} : {display: 'none'},
                ]}>
                <Text
                  style={{
                    backgroundColor: '#000',
                    color: 'gray',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    // borderTopLeftRadius: 10,
                    // borderTopRightRadius: 10,
                    textAlign: 'left',
                    padding: '2%',
                    paddingBottom: 20,
                    width: '92%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: -8,
                  }}>
                  {item.body}
                </Text>
              </View>
            </View>
          );
        })}
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Accordian />
    </View>
  );
};

export default CstmAcc;
