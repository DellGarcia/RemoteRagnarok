import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {theme} from '../../global/styles/theme';

export function Dpad() {
  const buttonSize = 80;
  const buttonColor = theme.colors.secondary40;

  function log() {
    console.log('click');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={log} activeOpacity={0.5}>
        <Entypo
          style={styles.btn}
          name="chevron-up"
          size={buttonSize}
          color={buttonColor}
        />
      </TouchableOpacity>

      <View style={styles.middle}>
        <TouchableOpacity onPress={log} activeOpacity={0.5}>
          <Entypo
            style={styles.btn}
            name="chevron-left"
            size={buttonSize}
            color={buttonColor}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={log} activeOpacity={0.5}>
          <Entypo
            style={styles.btn}
            name="chevron-right"
            size={buttonSize}
            color={buttonColor}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={log} activeOpacity={0.5}>
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
