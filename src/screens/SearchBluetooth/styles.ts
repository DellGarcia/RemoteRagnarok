import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  bluetoothList: {
    height: '100%',
    width: '100%',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    paddingHorizontal: 50,
    backgroundColor: theme.colors.tertiary80,
    borderRadius: 15,
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    color: theme.colors.heading
  }
});