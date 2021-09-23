import React from "react";
import { View } from "react-native";
import { Button } from "../Button";

import { styles } from './styles';

export function ButtonsGroup() {
  return (
    <View style={styles.container}>
      <Button title="Y"/>
      <View style={styles.middle}>
        <Button title="X"/>
        <Button title="B"/>
      </View>
      <Button title="A"/>
    </View>
  );
}