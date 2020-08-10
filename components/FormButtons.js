import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

const FormButtons = ({ topBtnText, bottomBtnText, handleSubmit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[globalStyles.btn, styles.topBtn]}
        onPress={handleSubmit}
      >
        <Text style={[globalStyles.btnText, styles.topBtnText]}>
          {topBtnText}
        </Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine}></View>
      </View>
      <TouchableOpacity style={[globalStyles.btn, styles.bottomBtn]}>
        <Text style={[globalStyles.btnText, styles.bottomBtnText]}>
          {bottomBtnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  topBtn: {
    backgroundColor: '#026AFC',
    marginBottom: 10,
  },
  topBtnText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  bottomBtn: {
    borderColor: '#A7A7A7',
    borderWidth: 1,
    marginTop: 10,
  },
  bottomBtnText: {
    color: '#A7A7A7',
    fontWeight: '700',
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

export default FormButtons;
