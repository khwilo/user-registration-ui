import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign, Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormButtons from '../components/FormButtons';
import UserRegistrationHeader from '../components/UserRegistrationHeader';
import { globalStyles } from '../styles/global';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8),
});

const UserSignUp = ({ navigation }) => {
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

  return (
    <>
      <UserRegistrationHeader
        headerText='Create Account'
        navigation={navigation}
      />
      <View style={globalStyles.userRegistrationForm}>
        <ScrollView>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={SignupSchema}
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
                    {!errors.name && touched.name ? (
                      <FontAwesome5 name='user' size={18} color='#2D77FC' />
                    ) : (
                      <FontAwesome5 name='user' size={18} color='#AEAEAE' />
                    )}
                  </View>
                  <TextInput
                    style={globalStyles.formControl}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder='Name'
                  />
                  {!errors.name && touched.name ? (
                    <AntDesign name='check' size={18} color='#2D77FC' />
                  ) : null}
                </View>
                {errors.name && touched.name ? (
                  <Text style={globalStyles.formError}>{errors.name}</Text>
                ) : null}

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
                  {!errors.email && touched.email ? (
                    <AntDesign name='check' size={18} color='#2D77FC' />
                  ) : null}
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
        </ScrollView>
      </View>
    </>
  );
};

export default UserSignUp;
