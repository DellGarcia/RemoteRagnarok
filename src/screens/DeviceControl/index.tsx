import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar, Text, View } from "react-native";
import { ButtonsGroup } from "../../components/ButtonsGroup";
import { Dpad } from "../../components/Dpad";
import { RootStackParamList } from "../../../App";

import { styles } from './styles';
import { Base64 } from "../../lib/base64";
import { CarMovements } from "../../enum/CarMovements";

export const DeviceControl = ({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, 'Device'>) => {
  const { device } = route.params;

  async function moveCallback(move: CarMovements) {
    await device.writeCharacteristicWithResponseForService(
      'ab0828b1-198e-4351-b779-901fa0e0371e', 
      '4ac8a682-9736-4e5d-932b-e9b31405049c', 
      Base64.encode(move)
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.title}>Ragnarok Control</Text>
      <View style={styles.controlsContainer}>
        <Dpad callback={moveCallback}/>
        <ButtonsGroup />
      </View>
    </View>
);
}