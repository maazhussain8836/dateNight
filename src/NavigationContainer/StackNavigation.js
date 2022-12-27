import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AddPerson from '../components/AddPerson';
import Cards from '../components/Cards';
import AddCouple from '../components/AddCouple';
import CoupleCard from '../components/CoupleCard';
import Welcome from '../screens/Welcome';
import Slider from '../screens/Slider';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import FAQ from '../screens/FAQ';
import PersProfilePage from '../screens/PersProfilePage';
import ForgotPass from '../screens/ForgotPass';
import ChangePass from '../screens/ChangePass';
import DateDone from '../screens/DateDone';
import CasualMode from '../screens/CasualMode';
import RestrauntMap from '../components/RestrauntMap';




const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="PersProfilePage" component={PersProfilePage} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="DateDone" component={DateDone} />
      <Stack.Screen name="CasualMode" component={CasualMode} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddPerson" component={AddPerson} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="AddCouple" component={AddCouple} />
        <Stack.Screen name="CoupleCard" component={CoupleCard} />
        <Stack.Screen name="RestrauntMap" component={RestrauntMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation