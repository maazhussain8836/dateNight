import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  UIManager,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {AccordionItem} from 'react-native-accordion-list-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
const FAQ = ({navigation}) => {
  const data = [
    {
      id: 0,
      title: 'First Date Mode',
      body: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing ',
      color: '#24202F',
    },
    {
      id: 1,
      title: 'Casual Date Mode',
      body: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing ',
      color: '#24202F',
    },
  ];

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#24202F', flex: 1}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: '5%',
        }}>
        <Entypo
          onPress={()=>navigation.goBack()}
          name={'cross'}
          color={'#FFF'}
          size={30}
          style={{position: 'absolute', left: 10}}
        />
        <Text style={styles.textCSS}>FAQ</Text>
      </View>
      <View>
        <ScrollView style={styles.container}>
          {data.map(item => (
            <AccordionItem
              customIcon={() => (
                <MaterialIcons
                  // style={{
                  //   backgroundColor: '#363143',
                  //   paddingVertical: 13,
                  //   // borderRadius: 20,
                  //   borderTopRightRadius:20,
                  //   borderBottomRightRadius:20,
                  //   marginLeft: -14,
                  //   paddingHorizontal: 8,
                  // }}
                  name={'keyboard-arrow-left'}
                  color={'#FFF'}
                  size={35}
                />
              )}
              key={item.id}
              customTitle={() => (
                <View
                  style={{
                    backgroundColor: '#363143',
                    padding: '6%',
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    // borderWidth: 2,
                    borderRadius: 20,
                    width: '95%',
                    // borderColor:'#FFF'
                    
                  }}>
                  <Text style={{color: '#FFFFFF', fontSize: 16}}>
                    {item.title}
                  </Text>
                </View>
              )}
              customBody={() => (
                <View style={{}}>
                  <Text
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: 'gray',
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // borderTopLeftRadius: 10,
                      // borderTopRightRadius: 10,
                      textAlign: 'center',
                      padding: '4%',
                      paddingBottom:30,
                      marginRight:20,
                      marginLeft:5,
                      marginTop:-10,
                      // zIndex:1,
                    }}>
                    {item.body}
                  </Text>
                </View>
              )}
              containerStyle={{
                backgroundColor: item.color,
                // padding: '6%',
                // borderRadius: 20,
                // marginBottom: '3%',
              }}
              animationDuration={200}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textCSS: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'Poppins',
  },
  container: {
    paddingVertical: '4%',
    paddingHorizontal: '3%',
    // height: '100%',
    // backgroundColor: '#FFF',
  },
});
export default FAQ;
