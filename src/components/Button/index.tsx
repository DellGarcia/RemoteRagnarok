import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { styles } from './styles';

type Props = {
  title: string;
}

export function Button({ title } : Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}  