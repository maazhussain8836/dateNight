import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const Welcome = ({navigation}) => {
    useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Slider')
    }, 2000);
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex',flexDirection:'column' }}>
                <View style={styles.HeadV}>
                    <Text style={styles.sHead}>Welcome to</Text>
                    <Text style={styles.mainHead}>Date Night</Text>
                    <Text style={{
                        color: '#A5A5A5', fontSize: 23,
                        fontStyle: 'Poppins'
                    }}>Dating just got <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}> fun </Text> again!</Text>
                </View>
                <View style={styles.DNImg}>
                    <Image source={require('../assets/images/Group2.png')}></Image>
                </View>
                <View>
                    <Text style={{ ...styles.sHead, width: 200, marginLeft: 'auto', marginRight: 'auto' }}>Get started in just
                        <Text style={{ ...styles.mainHead, fontSize: 23, }}> 4</Text> simple steps...</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,

    },
    HeadV: {
        display: 'flex',
        flexDirection: 'column',
        // width:326,
        // height:142,
        alignItems: 'center',
        marginTop: '15%'
    },
    sHead: {
        color: '#FFF',
        fontSize: 23,
        fontStyle: 'Poppins'
    },
    mainHead: {
        color: '#FF2B25',
        fontSize: 63,
        fontStyle: 'Poppins',
        fontWeight: 'bold'
    },
    DNImg: {
        marginVertical:'30%',
        alignItems: 'center',
        // height:'60%',
        // marginTop:'auto',
        // marginBottom:'auto'
    }

})
export default Welcome