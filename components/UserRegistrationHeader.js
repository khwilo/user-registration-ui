import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';

const UserRegistrationHeader = ({ headerText, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name='left' size={22} color='#ffffff' />
        </TouchableOpacity>
        <View style={styles.caption}>
          <Text style={[globalStyles.textHeader, globalStyles.textContent]}>
            {headerText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d7afc',
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 26,
  },
  caption: {
    width: 200,
    paddingTop: 40,
  },
});

export default UserRegistrationHeader;
