import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const Continue = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'BalooChettan2-ExtraBold': require('../../assets/Fonts/BalooChettan2-ExtraBold.ttf'),
        'Poppins-Medium': require('../../assets/Fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleContinuePress = () => {
        navigation.navigate('login');
    };

    return (
        <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>vro</Text>
            <Image source={require('../../assets/Images/wheel.png')} style={styles.logo} />
            <Text style={styles.text1}>m</Text>
          </View>
          <View style={styles.textUnder}>
            <Text style={styles.text2}>Connect with nearby rides and reach your destination hassle-free</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.Btn} onPress={handleContinuePress}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'row',
    position: 'absolute',
    top: 150,
    left: 47,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    fontSize: 64,
    fontFamily: 'BalooChettan2-ExtraBold',
    color: '#67A1FF',
  },
  logo: {
    width: 42,
    height: 42,
    marginTop: 14,
    marginLeft: -4,
  },
  textUnder: {
    marginTop: -25,
    position: 'relative',
    left: -10,
  },
  text2: {
    fontSize: 16,
    textAlign: 'left',
    paddingTop: 10,
    paddingRight: 45,
    marginRight: 15,
    marginLeft: 15,
    fontFamily: 'Poppins-Medium',
  },

  Btn: {
    position: 'absolute',
    bottom: 120,
    backgroundColor: '#67A1FF',
    width: 317,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default Continue;
