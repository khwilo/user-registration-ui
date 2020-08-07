import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Button } from 'react-native';
import { AntDesign, FontAwesome5, Feather, Octicons } from '@expo/vector-icons';
import { Formik } from 'formik';

import { globalStyles } from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  return (
    <>
      <View style={globalStyles.userRegistrationContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name='left' size={22} color='#ffffff' />
          </TouchableOpacity>
          <View style={globalStyles.userRegistrationCaption}>
            <Text style={[globalStyles.textHeader, globalStyles.textContent]}>
              Welcome Back
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.userRegistrationForm}>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View style={styles.formGroup}>
                  <View style={styles.formIconLeft}>
                    <FontAwesome5 name='envelope' size={18} color='#AEAEAE' />
                  </View>
                  <TextInput
                    style={styles.formControl}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder='Email'
                  />
                </View>
                <View style={styles.formGroup}>
                  <View>
                    <Feather name='lock' size={18} color='#AEAEAE' />
                  </View>
                  <TextInput
                    style={styles.formControl}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder='Password'
                  />
                  <View>
                    <Octicons name='eye-closed' size={18} color='#AEAEAE' />
                  </View>
                </View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>

                <TouchableOpacity style={[globalStyles.btn, styles.loginBtn]}>
                  <Text style={[globalStyles.btnText, styles.loginText]}>
                    Log in
                  </Text>
                </TouchableOpacity>
                <View style={styles.separator}>
                  <View style={styles.separatorLine}></View>
                  <Text style={styles.separatorText}>or</Text>
                  <View style={styles.separatorLine}></View>
                </View>
                <TouchableOpacity style={[globalStyles.btn, styles.signUpBtn]}>
                  <Text style={[globalStyles.btnText, styles.signUpText]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: '#026AFC',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  signUpBtn: {
    borderColor: '#A7A7A7',
    borderWidth: 1,
    marginTop: 10,
  },
  signUpText: {
    color: '#A7A7A7',
    fontWeight: '700',
  },
  formGroup: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
  },
  formControl: {
    // borderBottomColor: '#E3E3E3',
    // borderBottomWidth: 1,
    padding: 10,
    // color: '#AEAEAE',
    color: '#2175FC',
    fontSize: 18,
    flex: 1,
  },
  formIconLeft: {
    // position: 'absolute',
    // left: 2,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    fontWeight: '700',
    color: '#2D77FC',
    fontSize: 14,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#A7A7A7',
    flex: 1,
  },
  separatorText: {
    color: '#A7A7A7',
    fontWeight: '700',
    marginHorizontal: 10,
  },
});

export default Login;
