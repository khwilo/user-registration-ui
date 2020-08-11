import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import { Formik } from 'formik';

import { globalStyles } from '../styles/global';
import FormButtons from './FormButtons';
import UserRegistrationHeader from './UserRegistrationHeader';

const UserLogin = ({ navigation }) => {
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

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
                    keyboardType='email-address'
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
                    secureTextEntry={isPasswordInvisible}
                    placeholder='Password'
                  />
                  <TouchableOpacity
                    onPress={() => setIsPasswordInvisible(!isPasswordInvisible)}
                  >
                    {isPasswordInvisible ? (
                      <Octicons name='eye-closed' size={18} color='#AEAEAE' />
                    ) : (
                      <Octicons name='eye' size={18} color='#AEAEAE' />
                    )}
                  </TouchableOpacity>
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
