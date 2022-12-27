import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import {AccordionItem} from 'react-native-accordion-list-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Accordian = () => {
  const [selectID, setSelectID] = useState();
  const [showAcc, setShowAcc] = useState(true);
  const data = [
    {
      id: 0,
      title: 'First Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#80D3FC',
    },
    {
      id: 1,
      title: 'Casual Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#44BEFB',
    },
    {
      id: 2,
      title: 'Exclusive Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#0883FB',
    },
    {
      id: 3,
      title: 'Married Date Mode',
      body: 'It may, or may not be an actual "first" date, but its certainly one of the first... a get-to-know Kind of date. Youll need ice-breakers ',
      color: '#0149FF',
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

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
  const AccordianBody = ({item}) => {
    return (
      <View style={{}}>
        <Text
          style={{
            backgroundColor: '#FFFFFF',
            color: 'gray',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            // borderTopLeftRadius: 10,
            // borderTopRightRadius: 10,
            textAlign: 'left',
            padding: '2%',
            paddingBottom: 20,
            marginRight: 28,
            marginLeft: 5,

            marginTop: -8,
          }}>
          {item.body}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {data.map(item => (
          <AccordionItem
            customIcon={() => (
              <MaterialIcons
                name={'keyboard-arrow-left'}
                color={'#FFF'}
                size={35}
              />
            )}
            key={item.id}
            customTitle={() => (
              <View
                style={{
                  backgroundColor: item.color,
                  padding: '4%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // borderWidth: 2,
                  borderRadius: 20,
                  width: '94%',
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: '#000',
                  // borderColor:'#FFF'
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 16}}>
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
                  {selectID == item.id  && <SelectModeView />}
                  {/* {selectID == item.id ? <SelectModeView /> : null && alert(showAcc)} */}
                </TouchableOpacity>
              </View>
            )}
            customBody={
              () =>
                // showAcc==true ?
                AccordianBody({item})
              // :null
            }
            containerStyle={{
              backgroundColor: '#000',
              padding: '1%',
            }}
            animationDuration={200}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


export default Accordian;
const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    borderWidth: 1,
    borderColor: '#000',
    // height: '100%',
    // backgroundColor: '#FFF',
  },
});
