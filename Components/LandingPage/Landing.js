// Landing.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'BalooChettan2-ExtraBold': require('../../assets/Fonts/BalooChettan2-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        navigation.navigate('continue');
      }, 1500);
    }
  }, [fontsLoaded, navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>vro</Text>
        <Image source={require('../../assets/Images/wheel.png')} style={styles.logo} />
        <Text style={styles.text}>m</Text>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
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
});

export default Landing;
