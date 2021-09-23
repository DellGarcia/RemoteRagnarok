import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const buttonSize = 60;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize,
    borderColor: theme.colors.tertiary80,
    borderWidth: 5
  },
  title: {
    fontSize: 20,
    color: theme.colors.heading
  }
});