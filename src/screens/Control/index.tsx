import React from "react";
import { StatusBar, Text, View } from "react-native";
import { ButtonsGroup } from "../../components/ButtonsGroup";
import { Dpad } from "../../components/Dpad";

import { styles } from './styles';

export function Control() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.title}>Ragnarok Control</Text>
      <View style={styles.controlsContainer}>
        <Dpad />
        <ButtonsGroup />
      </View>
    </View>
);
}