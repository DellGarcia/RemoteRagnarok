import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Device, Service } from 'react-native-ble-plx';
import { RootStackParamList } from '../../../App';
import { styles } from './styles';
import { Base64 } from '../../lib/base64';

type DeviceCardProps = {
  device: Device;
};

export const DeviceCard = ({ device }: DeviceCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    device.isConnected().then(setIsConnected);
  }, [device]);

  async function handleConnect() {
    try {
      await device.connect();

      device = (await device.discoverAllServicesAndCharacteristics())

      navigation.navigate('Device', { device })
    } catch(err) {
      console.log(err)
    }
  }
  
  
  return (
    <TouchableOpacity
      style={styles.container}
			// navigate to the Device Screen
      onPress={handleConnect}
    >
      <Text>{`Id : ${device.id}`}</Text>
      <Text>{`Name : ${device.name}`}</Text>
      <Text>{`Is connected : ${isConnected}`}</Text>
      <Text>{`RSSI : ${device.rssi}`}</Text>
			{/* Decode the ble device manufacturer which is encoded with the base64 algorithm */}
      <Text>{`Manufacturer : ${Base64.decode(
        device.manufacturerData?.replace(/[=]/g, ''),
      )}`}</Text>
      <Text>{`ServiceData : ${device.serviceData}`}</Text>
      <Text>{`UUIDS : ${device.serviceUUIDs}`}</Text>
    </TouchableOpacity>
  );
}