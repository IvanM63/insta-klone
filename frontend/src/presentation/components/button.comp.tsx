import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonComp = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-blue-600 rounded-full h-12 justify-center">
      <Text className="color-white text-center text-base font-semibold">
        Log In
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;
