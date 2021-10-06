import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Descriptor } from 'react-native-ble-plx';
import { Base64 } from '../../lib/base64';

import { styles } from './styles';

type DescriptorCardProps = {
  descriptor: Descriptor;
};

export const DescriptorCard = ({ descriptor }: DescriptorCardProps) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    (async () => {
      descriptor.read().then((r) => {
        if (r && r.value) {
          setValue(r.value);
        }
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>
        {descriptor.id + ' -> ' + Base64.decode(value) + '(' + value + ')'}
      </Text>
    </View>
  );
};