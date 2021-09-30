import React, { useReducer, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { BleManager, Device } from 'react-native-ble-plx';
import { TouchableOpacity } from "react-native-gesture-handler";
import { DeviceCard } from "../../components/DeviceCard";

import { styles } from './styles';

const manager = new BleManager();

export function SearchBluetooth() {
  const reducer = (
    state: Device[],
    action: { type: 'ADD_DEVICE'; payload: Device } | { type: 'CLEAR' },
  ): Device[] => {
    switch (action.type) {
      case 'ADD_DEVICE':
        const { payload: device } = action;

        if (device && !state.find((dev) => dev.id === device.id)) {
          return [...state, device];
        }
        return state;
      case 'CLEAR':
        return [];
      default:
        return state;
    }
  };

  const [scannedDevices, dispatch] = useReducer(reducer, []);

  const [isLoading, setIsLoading] = useState(false);

  const scanDevices = () => {
    setIsLoading(true);

    manager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }
      console.log(scanDevices)
      if (scannedDevice) {
        dispatch({ type: 'ADD_DEVICE', payload: scannedDevice });
      }
    });

      setTimeout(() => {
      manager.stopDeviceScan();
      setIsLoading(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={scannedDevices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        contentContainerStyle={styles.bluetoothList}
      />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => dispatch({ type: 'CLEAR' })} style={{marginRight: 20, ...styles.btn}}>
          <Text style={styles.title}>Clear Devices</Text>
        </TouchableOpacity>
        {isLoading ?
          (
            <ActivityIndicator style={styles.btn} color={'teal'} size={25} />
          ) 
          : 
          (
            <TouchableOpacity onPress={scanDevices} style={styles.btn}>
              <Text style={styles.title}>Scan devices</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
}
