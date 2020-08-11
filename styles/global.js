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
  userRegistrationForm: {
    backgroundColor: '#ffffff',
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 26,
    flex: 2,
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
  },
  formControl: {
    padding: 10,
    color: '#2175FC',
    fontSize: 18,
    flex: 1,
  },
  formError: {
    color: 'crimson',
  },
});
