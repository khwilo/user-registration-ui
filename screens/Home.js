import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <View style={styles.container}>
        <View style={styles.homeContent}>
          <Text style={[styles.textContent, styles.textLogo]}>wwater</Text>

          <View>
            <Text style={[styles.textContent, styles.textHeader]}>
              Water delivery
            </Text>
            <Text style={[styles.textContent, styles.textCaption]}>
              We deliver water at any point of the Earth in 30 minutes
            </Text>

            <View>
              <TouchableOpacity style={[styles.btn, styles.loginBtn]}>
                <Text style={[styles.btnText, styles.loginText]}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.signUpBtn]}>
                <Text style={[styles.btnText, styles.signUpText]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d7afc',
    paddingTop: Platform.OS === 'ios' ? '0' : StatusBar.currentHeight,
    paddingBottom: 40,
    paddingHorizontal: 26,
  },
  homeContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContent: {
    color: '#ffffff',
  },
  textLogo: {
    fontSize: 20,
  },
  textHeader: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 5,
  },
  textCaption: {
    marginBottom: 30,
    fontSize: 16,
    fontWeight: '300',
  },
  btn: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
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
