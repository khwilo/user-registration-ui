import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d7afc',
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 26,
  },
  textContent: {
    color: '#ffffff',
  },
  textHeader: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 5,
  },
  btn: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
  },
  userRegistrationContainer: {
    backgroundColor: '#1d7afc',
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 26,
    flex: 1,
  },
  userRegistrationCaption: {
    width: 200,
    paddingTop: 40,
  },
  userRegistrationForm: {
    backgroundColor: '#ffffff',
    paddingTop: 0,
    paddingHorizontal: 26,
    flex: 2,
  },
});
