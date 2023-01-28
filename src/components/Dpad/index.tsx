import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CarMovements } from '../../enum/CarMovements';
import {theme} from '../../global/styles/theme';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

type Props = {
  callback: (move: CarMovements) => void
}

export function Dpad({ callback } : Props) {
  const buttonSize = 80;
  const buttonColor = theme.colors.secondary40;

  function handleClick(move: CarMovements) {
    callback(move);
    console.log(move);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPressIn={() => handleClick(CarMovements.FOWARD)}
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
          onPressIn={() => handleClick(CarMovements.LEFT)}
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
          onPressIn={() => handleClick(CarMovements.RIGHT)}
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
        onPressIn={() => handleClick(CarMovements.BACKWARD)}
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
