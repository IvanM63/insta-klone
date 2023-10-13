import {Image, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View className="flex flex-col bg-white h-screen">
      <View className="flex-1 items-center justify-center">
        <Image
          className="h-24 w-24"
          source={require('../../assets/ig-logo.png')}
        />
      </View>
      <View className="flex-2 items-center justify-end">
        <Text className="">from</Text>
        <Image
          className="mb-8 w-20 h-8"
          source={require('../../assets/meta-logo.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

//const styles = StyleSheet.create({});
