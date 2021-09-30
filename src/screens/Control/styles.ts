import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inconsolata',
    width: '100%',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 35,
    color: theme.colors.heading,
  },
  controlsContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});