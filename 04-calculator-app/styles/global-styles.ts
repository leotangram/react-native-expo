import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400'
    // fontFamily: 'SpaceMono'
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: Colors.textPrimary,
    fontSize: 30,
    fontWeight: '300',
    fontFamily: 'SpaceMono'
  }
})
