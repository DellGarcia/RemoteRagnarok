import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Dpad } from './src/components/Dpad';

import { theme } from './src/global/styles/theme';
import { ButtonsGroup } from './src/components/ButtonsGroup';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
      <Text style={styles.title}>Ragnarok Control</Text>
      <View style={styles.controlsContainer}>
        <Dpad />
        <ButtonsGroup />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center'
  }
});
