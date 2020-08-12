import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={globalStyles.container}>
        <View style={styles.homeContent}>
          <Text style={[globalStyles.textContent, styles.textLogo]}>
            wwater
          </Text>

          <View>
            <Text style={[globalStyles.textContent, globalStyles.textHeader]}>
              Water delivery
            </Text>
            <Text style={[globalStyles.textContent, styles.textCaption]}>
              We deliver water at any point of the Earth in 30 minutes
            </Text>

            <View>
              <TouchableOpacity
                style={[globalStyles.btn, styles.loginBtn]}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={[globalStyles.btnText, styles.loginText]}>
                  Log In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[globalStyles.btn, styles.signUpBtn]}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={[globalStyles.btnText, styles.signUpText]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textLogo: {
    fontSize: 20,
  },
  textCaption: {
    marginBottom: 30,
    fontSize: 16,
    fontWeight: '300',
  },
  loginBtn: {
    backgroundColor: '#ffffff',
  },
  loginText: {
    color: '#0652BB',
    fontWeight: '700',
  },
  signUpBtn: {
    marginTop: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  signUpText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default Home;
