import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import { Formik } from 'formik';

import FormButtons from './FormButtons';
import UserRegistrationHeader from './UserRegistrationHeader';
import { globalStyles } from '../styles/global';

const UserLogin = ({ navigation }) => {
  return (
    <>
      <UserRegistrationHeader
        headerText='Welcome Back'
        navigation={navigation}
      />
      <View style={globalStyles.userRegistrationForm}>
        <>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View style={globalStyles.formGroup}>
                  <View>
                    <FontAwesome5 name='envelope' size={18} color='#AEAEAE' />
                  </View>
                  <TextInput
                    style={globalStyles.formControl}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder='Email'
                  />
                </View>
                <View style={globalStyles.formGroup}>
                  <View>
                    <Feather name='lock' size={18} color='#AEAEAE' />
                  </View>
                  <TextInput
                    style={globalStyles.formControl}
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

                <FormButtons
                  topBtnText='Login'
                  bottomBtnText='Sign Up'
                  navigationLink='SignUp'
                  handleSubmit={handleSubmit}
                  navigation={navigation}
                />
              </View>
            )}
          </Formik>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    fontWeight: '700',
    color: '#2D77FC',
    fontSize: 14,
  },
});

export default UserLogin;
