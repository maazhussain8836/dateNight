// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Pressable,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Slider = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  // const renderNextButton = () => {
  //   return (
  //     <Pressable onPress={}>
  //       <LinearGradient
  //         colors={['#FE6F6F', '#E20303']}
  //         style={styles.linearGradient}
  //         start={{x: 0, y: 0}}
  //         end={{x: 1, y: 0}}>
  //         <Text style={styles.buttonText}>Next</Text>
  //       </LinearGradient>
  //     </Pressable>
  //   );
  // };

  const RenderNextButton = () => {
    return (
      <LinearGradient
              colors={['#FE6F6F', '#E20303']}
              style={styles.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.buttonText}>Next</Text>
            </LinearGradient>
    );
  };
  const renderSkipButton = () => {
    return (
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Skip</Text>
      </Pressable>
    );
  };
  const renderFinishButton = () => {
    return (
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <LinearGradient
          colors={['#FE6F6F', '#E20303']}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.buttonText}>Finsih</Text>
        </LinearGradient>
      </Pressable>
    );
  };
  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Image
          resizeMode="contain"
          style={styles.introImageStyle1}
          source={item.DNimage}
        />
        <View style={{height: '50%'}}>
          <Image
            resizeMode="contain"
            style={styles.introImageStyle}
            source={item.image}
          />
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          activeDotStyle={{backgroundColor: '#FF2B25', marginBottom: 150}}
          dotStyle={{backgroundColor: '#56535F', marginBottom: 150}}
          renderNextButton={RenderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderFinishButton}
          doneLabel="Finish"
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showNextButton={true}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingVertical: '1%',
    paddingLeft: 33,
    paddingRight: 33,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle1: {
    width: 103.49,
    height: 85.68,
    // borderWidth:1,
    // borderColor:'#FFF'
  },
  introImageStyle: {
    width: 203,
    height: 203,
    // borderWidth:1,
    // borderColor:'#FFF',
  },
  introTextStyle: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'Poppins',
    fontWeight: '300',
    // borderWidth:1,
    // borderColor:'#FFF',
    marginTop: '4%',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Create a Profile',
    DNimage: require('../assets/images/5.png'),
    image: require('../assets/images/1.png'),
    backgroundColor: '#000000',
  },
  {
    key: 's2',
    DNimage: require('../assets/images/5.png'),
    text: 'Plan the Date',
    image: require('../assets/images/2.png'),
    backgroundColor: '#000000',
  },
  {
    key: 's3',
    DNimage: require('../assets/images/5.png'),
    text: 'Send the Invitation',
    image: require('../assets/images/3.png'),
    backgroundColor: '#000000',
  },
  {
    key: 's4',
    DNimage: require('../assets/images/5.png'),
    text: ' Enjoy the Date',
    image: require('../assets/images/4.png'),
    backgroundColor: '#000000',
  },
];
