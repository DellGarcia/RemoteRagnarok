import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Device, Service } from 'react-native-ble-plx';
import { RootStackParamList } from '../../../App';
import { styles } from './styles';

type DeviceCardProps = {
  device: Device;
};

export const DeviceCard = ({ device }: DeviceCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
		// is the device connected?
    device.isConnected().then(setIsConnected);
  }, [device]);

  const DeviceScreen = ({
    route,
    navigation,
  }: StackScreenProps<RootStackParamList, 'Device'>) => {
    const { device } = route.params;
  
    const [isConnected, setIsConnected] = useState(false);
    const [services, setServices] = useState<Service[]>([]);
  
    const disconnectDevice = useCallback(async () => {
      navigation.goBack();
      const isDeviceConnected = await device.isConnected();
      if (isDeviceConnected) {
        await device.cancelConnection();
      }
    }, [device]);
  
    useEffect(() => {
      const getDeviceInformations = async () => {
        // connect to the device
        const connectedDevice = await device.connect();
        setIsConnected(true);
  
        // discover all device services and characteristics
        const allServicesAndCharacteristics = await connectedDevice.discoverAllServicesAndCharacteristics();
        // get the services only
        const discoveredServices = await allServicesAndCharacteristics.services();
        setServices(discoveredServices);
      };
  
      getDeviceInformations();
  
      device.onDisconnected(() => {
        navigation.navigate('Home');
      });
  
      // give a callback to the useEffect to disconnect the device when we will leave the device screen
      return () => {
        disconnectDevice();
      };
    }, [device, disconnectDevice, navigation]);
  }
  return (
    <TouchableOpacity
      style={styles.container}
			// navigate to the Device Screen
      onPress={() => navigation.navigate('Device', { device })}
    >
      <Text>{`Id : ${device.id}`}</Text>
      <Text>{`Name : ${device.name}`}</Text>
      <Text>{`Is connected : ${isConnected}`}</Text>
      <Text>{`RSSI : ${device.rssi}`}</Text>
			{/* Decode the ble device manufacturer which is encoded with the base64 algorithm */}
      {/* <Text>{`Manufacturer : ${Base64.decode(
        device.manufacturerData?.replace(/[=]/g, ''),
      )}`}</Text> */}
      <Text>{`ServiceData : ${device.serviceData}`}</Text>
      <Text>{`UUIDS : ${device.serviceUUIDs}`}</Text>
    </TouchableOpacity>
  );
}