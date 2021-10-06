import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {theme} from '../../global/styles/theme';
import { CarMovements } from '../../enum/CarMovements';

type Props = {
  callback: (move: CarMovements) => void
}

export function Dpad({ callback } : Props) {
  const buttonSize = 80;
  const buttonColor = theme.colors.secondary40;

  function handleClick(move: CarMovements) {
    callback(move);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => handleClick(CarMovements.FOWARD)}
        onPressOut={() => handleClick(CarMovements.STOP)}
        activeOpacity={0.5}
      >
        <Entypo
          style={styles.btn}
          name="chevron-up"
          size={buttonSize}
          color={buttonColor}
        />
      </TouchableOpacity>

      <View style={styles.middle}>
        <TouchableOpacity 
          onPress={() => handleClick(CarMovements.LEFT)}
          onPressOut={() => handleClick(CarMovements.STOP)}
          activeOpacity={0.5}
        >
          <Entypo
            style={styles.btn}
            name="chevron-left"
            size={buttonSize}
            color={buttonColor}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleClick(CarMovements.RIGHT)}
          onPressOut={() => handleClick(CarMovements.STOP)}
          activeOpacity={0.5}
        >
          <Entypo
            style={styles.btn}
            name="chevron-right"
            size={buttonSize}
            color={buttonColor}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => handleClick(CarMovements.BACKWARD)}
        onPressOut={() => handleClick(CarMovements.STOP)}
        activeOpacity={0.5}
      >
        <Entypo
          style={styles.btn}
          name="chevron-down"
          size={buttonSize}
          color={buttonColor}
        />
      </TouchableOpacity>
    </View>
  );
}
