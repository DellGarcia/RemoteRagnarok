import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity} from "react-native";
import { Characteristic, Descriptor, Service } from "react-native-ble-plx";
import { CharacteristicCard } from "../CaracteristicCard";
import { DescriptorCard } from "../DescriptorCard";
import { styles } from './styles';

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const [descriptors, setDescriptors] = useState<Descriptor[]>([]);
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([]);
  const [areCharacteristicsVisible, setAreCharacteristicsVisible] = useState(
    false,
  );

  useEffect(() => {
    const getCharacteristics = async () => {
      const newCharacteristics = await service.characteristics();
      setCharacteristics(newCharacteristics);
      newCharacteristics.forEach(async (characteristic) => {
        const newDescriptors = await characteristic.descriptors();
        setDescriptors((prev) => [...new Set([...prev, ...newDescriptors])]);
      });
    };

    getCharacteristics();
  }, [service]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setAreCharacteristicsVisible((prev) => !prev);
        }}>
        <Text>{`UUID : ${service.uuid}`}</Text>
      </TouchableOpacity>

      {areCharacteristicsVisible &&
        characteristics &&
        characteristics.map((char) => (
          <CharacteristicCard key={char.id} char={char} />
        ))}
      {descriptors &&
        descriptors.map((descriptor) => (
          <DescriptorCard key={descriptor.id} descriptor={descriptor} />
        ))}
    </View>
  );
};