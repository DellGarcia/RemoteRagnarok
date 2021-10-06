import React, { useReducer, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { BleManager, Device } from 'react-native-ble-plx';
import { TouchableOpacity } from "react-native-gesture-handler";
import { DeviceCard } from "../../components/DeviceCard";

import { styles } from './styles';

const manager = new BleManager();

export function SearchBluetooth() {
  const [devices, setDevices] = useState<Device[]>([]);

  function handleScanDevice() {
    manager.startDeviceScan(null, { allowDuplicates: false }, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }
      
      if (scannedDevice && !devices.find((dev) => dev.id === scannedDevice.id)) 
          setDevices([...devices, scannedDevice]);
    });

    setTimeout(() => {
      manager.stopDeviceScan();
    }, 5000);
  }

  function handleClear() {
    setDevices([]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={devices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        contentContainerStyle={styles.bluetoothList}
      />
      <View style={styles.row}>
        <TouchableOpacity onPress={handleClear} style={{marginRight: 20, ...styles.btn}}>
          <Text style={styles.title}>Clear Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleScanDevice} style={styles.btn}>
          <Text style={styles.title}>Scan devices</Text>
        </TouchableOpacity>        
      </View>
    </View>
  );
}
