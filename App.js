import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Welcome from './src/screens/Welcome'
import Slider from './src/screens/Slider'
import SignIn from './src/screens/SignIn'
import Input from './src/components/Input'

import SignUp from './src/screens/SignUp'
import Accordian from './src/components/Accordian'
import Accordian2 from './src/components/Accordian2'
import Cards from './src/components/Cards'
import Home from './src/screens/Home'
import CBtnSimple from './src/components/CBtnSimple'
import Pings from './src/components/Pings'
import AddPerson from './src/components/AddPerson'
import StackNavigation from './src/NavigationContainer/StackNavigation'
import AppContext from './src/components/AppContext'
import CustomButton from './src/components/CustomButton'
import AddCouple from './src/components/AddCouple'
import PrePlannedPings from './src/components/PrePlannedPings'
import StaticCoupleCard from './src/components/StaticCoupleCard'
import ForgotPass from './src/screens/ForgotPass'
import ChangePass from './src/screens/ChangePass'
import PersProfilePage from './src/screens/PersProfilePage'
import NextDateCard from './src/components/NextDateCard'
import ScheduleCards from './src/components/ScheduleCards'
import EventCards from './src/components/EventCards'
import DateDone from './src/screens/DateDone'
import FAQ from './src/screens/FAQ'
import CasualMode from './src/screens/CasualMode'
import OpenMapApp from './src/components/OpenMapApp'
import CountryCode from './src/components/CountryCode'
import CstmAcc from './src/components/CstmAcc'

const App = () => {
  const [personDetails,setPersonDetails]=useState([]);
  const [coupleDetails,setCoupleDetails]=useState([]);
  const [prePlanDates,setPrePlanDates]=useState([]);
  const [addPerson, setAddPerson] = useState(true)
  const [addCouple, setAddCouple] = useState(true)
  const [addNewCard, setAddNewCard] = useState(false)
  const [addNewCoupleCard, setAddNewCoupleCard] = useState(false)

  const value={
    personDetails:personDetails,
    coupleDetails:coupleDetails,
    addPerson:addPerson,
    addNewCard:addNewCard,
    addCouple:addCouple,
    addNewCoupleCard:addNewCoupleCard,
    prePlanDates:prePlanDates,
    setPrePlanDates,
    setAddNewCoupleCard,
    setCoupleDetails,
    setAddCouple,
    setAddPerson,
    setAddNewCard,
    setPersonDetails
  }
  return (
    <AppContext.Provider value={value}>
    <View style={{flex:1}}>
      <StackNavigation/>
      {/* <OpenMapApp/> */}
      {/* <CustomButton/> */}
      {/* <Welcome/> */}
      {/* <Slider/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Input/> */}
      {/* <Button/> */}
      {/* <Accordian/> */}
      {/* <Accordian2/> */}
      {/* <Cards/> */}
      {/* <Home/> */}
      {/* <Pings/> */}
      {/* <AddPerson/> */}
      {/* <AddCouple/> */}
      {/* <CoupleCard/> */}
      {/* <PrePlannedPings/> */}
      {/* <StaticCoupleCard/> */}
      {/* <ForgotPass/> */}
      {/* <ChangePass/> */}
      {/* <PersProfilePage/> */}
      {/* <ScheduleCards/> */}
      {/* <NextDateCard/> */}
      {/* <EventCards/> */}
      {/* <DateDone/> */}
      {/* <FAQ/> */}
      {/* <CasualMode/> */}
      {/* <CountryCode/> */}
      {/* <CstmAcc/> */}
    </View>
    </AppContext.Provider>
  )
}

export default App