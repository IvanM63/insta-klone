import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

import MetaLogo from '../../assets/meta-logo-black.svg';
import Calendar from '../../assets/calendar.svg';

const Tes = () => {
  return (
    <View>
      <ImageBackground
        className="h-screen"
        source={require('../../assets/ig-bg.jpg')}
        resizeMode="cover"></ImageBackground>
      <Text>Inside</Text>
    </View>
  );
};

export default Tes;
