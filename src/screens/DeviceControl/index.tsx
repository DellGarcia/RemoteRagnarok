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

  const serviceUUID = '6E400001-B5A3-F393-E0A9-E50E24DCCA9E';
  const characteristicUUID_RX = '6E400001-B5A3-F393-E0A9-E50E24DCCA9E';
  const characteristicUUID_TX = '6E400001-B5A3-F393-E0A9-E50E24DCCA9E';

  // useEffect(() => {
  //   setInterval( async() => {
  //     const res = await device.readCharacteristicForService(serviceUUID, 
  //       characteristicUUID_TX);

  //   }, 1000);
  // }, [])

  async function moveCallback(move: CarMovements) {
    await device.writeCharacteristicWithResponseForService(
      serviceUUID, 
      characteristicUUID_RX, 
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