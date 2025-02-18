import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface ButtonoptionProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

const CustomButton = ({ text, onPress, disabled = false }: ButtonoptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-12 items-center justify-center self-stretch rounded-md border-b-4
        ${disabled ? 'border-gray-400 bg-gray-300' : 'border-[#57A600] bg-[#59CC02]'}`}>
      <Text className="text-x1 border-b border-[#ffff] font-bold text-white">{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
