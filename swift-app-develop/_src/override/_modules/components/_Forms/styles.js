import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius:50,
  },
  containerCheckBottom: {
    paddingHorizontal: 1,
    flexDirection: 'row',
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
  },
  containerCheck: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    marginStart: 10,
  },
  button: {
    marginBottom: 1,
    height: 20,
    paddingVertical: 10,
  },
});

export default styles;
