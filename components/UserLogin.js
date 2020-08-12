import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign, Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { globalStyles } from '../styles/global';
import FormButtons from './FormButtons';
import UserRegistrationHeader from './UserRegistrationHeader';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email address is required'),
  password: Yup.string().required('Password is required').min(8),
});

const UserLogin = ({ navigation }) => {
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

  return (
    <View style={styles.container}>
      <UserRegistrationHeader
        headerText='Welcome Back'
        navigation={navigation}
      />
      <View style={globalStyles.userRegistrationForm}>
        <ScrollView>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <View style={globalStyles.formGroup}>
                  <View>
                    {!errors.email && touched.email ? (
                      <FontAwesome5 name='envelope' size={18} color='#2D77FC' />
                    ) : (
                      <FontAwesome5 name='envelope' size={18} color='#AEAEAE' />
                    )}
                  </View>
                  <TextInput
                    style={globalStyles.formControl}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType='email-address'
                    placeholder='Email'
                  />
                  <View>
                    {!errors.email && touched.email ? (
                      <AntDesign name='check' size={18} color='#2D77FC' />
                    ) : null}
                  </View>
                </View>
                {errors.email && touched.email ? (
                  <Text style={globalStyles.formError}>{errors.email}</Text>
                ) : null}
                <View style={globalStyles.formGroup}>
                  <View>
                    {!errors.password && touched.password ? (
                      <Feather name='lock' size={18} color='#2D77FC' />
                    ) : (
                      <Feather name='lock' size={18} color='#AEAEAE' />
                    )}
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
                {errors.password && touched.password ? (
                  <Text style={globalStyles.formError}>{errors.password}</Text>
                ) : null}

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
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    fontWeight: '700',
    color: '#2D77FC',
    fontSize: 14,
  },
});

export default UserLogin;
