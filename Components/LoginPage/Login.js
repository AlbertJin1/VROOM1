import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const usenavigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'BalooChettan2-ExtraBold': require('../../assets/Fonts/BalooChettan2-ExtraBold.ttf'),
    'Poppins-Medium': require('../../assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/Fonts/Poppins-SemiBold.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  const handleContinuePress = () => {
    navigation.navigate('register');
  };


  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.text1}>vro</Text>
            <Image source={require('../../assets/Images/wheel.png')} style={styles.logo} />
            <Text style={styles.text1}>m</Text>
        </View>
        <View style={styles.textUnder}>
          <Text style={styles.text2}>Your rides at your fingertips!</Text>
        </View>

        <Input
            placeholder="Email"
            leftIcon={<Image source={require('../../assets/Images/user.png')} style={styles.Icon} />}
            onChangeText={(text) => setUsername(text)}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={styles.input}
            inputStyle={{ fontSize: 16, color: 'black', fontFamily: 'Poppins-Medium',  paddingTop: 7}}            
        />

        <Input
            placeholder="Password"
            leftIcon={<Image source={require('../../assets/Images/lock.png')} style={styles.Icon} />}
            onChangeText={(text) => setPassword(text)}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={[styles.input, styles.passwordInput]}
            inputStyle={{ fontSize: 16, color: 'black', fontFamily: 'Poppins-Medium',  paddingTop: 7}}
        />

        <TouchableOpacity style={styles.forgotPasswordLink}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn} onPress={handleContinuePress}>
            <Text style={styles.btnText}>Sign in</Text>  
        </TouchableOpacity>

        <View style={styles.orTextContainer}>
            <View style={styles.VerticalLine} />
                <Text style={styles.text3}>Or sign in with</Text>
            <View style={styles.VerticalLine} />
        </View>

        <View style={styles.iconButtonsContainer}>
            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/Images/facebook.png')} style={styles.iconImage} />
                <Text style={styles.text4}>Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/Images/google.png')} style={styles.iconImage} />
                <Text style={styles.text4}>Google</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.RegTextContainer}>
            <Text style={styles.RegText1}>Need an account? </Text>

            <TouchableOpacity>
                <Text style={styles.RegText2}>Register here.</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
},
  text1: {
    fontSize: 64,
    fontFamily: 'BalooChettan2-ExtraBold',
    color: '#67A1FF',
},
  text2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 40,
},
  logo: {
    width: 42,
    height: 42,
    marginTop: 14,
    marginLeft: -4,
},
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: 'black',
    marginBottom: 15,
},
  Icon: {
    width: 18,
    height: 18,
    marginTop: 5,
},
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    position: 'relative',
    right: 32,
    top: -5,
},
  forgotPasswordText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
},
  Btn:{
    backgroundColor: '#67A1FF',
    width: 317,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 50,
},
  btnText:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
},
orTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 50,
    paddingLeft: 50,
    paddingRight: 50,

},
text3: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
},
VerticalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
    marginLeft: 10,
    marginRight: 10,
},
iconButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
},

iconContainer: {
    width: 130,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#888',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 10,
    marginRight: 10,
},
iconImage: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 5,
  },

  text4: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    paddingTop: 3,
},

RegTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RegText1: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
  },
  RegText2: {
    fontSize: 14,
    color: '#67A1FF',
    fontWeight: '800',
  },
});

export default Login;