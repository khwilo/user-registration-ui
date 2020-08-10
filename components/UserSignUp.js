import React from 'react';
import { TextInput, View } from 'react-native';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import { Formik } from 'formik';

import FormButtons from '../components/FormButtons';
import UserRegistrationHeader from '../components/UserRegistrationHeader';
import { globalStyles } from '../styles/global';

const UserSignUp = ({ navigation }) => {
  return (
    <>
      <UserRegistrationHeader
        headerText='Create Account'
        navigation={navigation}
      />
      <View style={globalStyles.userRegistrationForm}>
        <>
          <Formik initialValues={{ name: '', email: '', password: '' }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View style={globalStyles.formGroup}>
                  <View>
                    <FontAwesome5 name='user' size={18} color='#AEAEAE' />
                  </View>
                  <TextInput
                    style={globalStyles.formControl}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder='Name'
                  />
                </View>
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

                <FormButtons
                  topBtnText='Sign Up'
                  bottomBtnText='Login'
                  handleSubmit={handleSubmit}
                  navigationLink='Login'
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

export default UserSignUp;
