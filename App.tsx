import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Device } from 'react-native-ble-plx';
import { DeviceControl } from './src/screens/DeviceControl';
import { SearchBluetooth } from './src/screens/SearchBluetooth';


export type RootStackParamList = {
  Home: undefined;
  Device: { device: Device };
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Device" component={DeviceControl} />
        <Stack.Screen name="Home" component={SearchBluetooth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


