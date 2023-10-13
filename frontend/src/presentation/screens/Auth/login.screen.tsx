import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import FormComp from '../../components/form.comp';

//SVG Icons
import MetaLogo from '../../assets/meta-logo-black.svg';

//Navigation
import Navigation from '../../../application/navigations/navigation';
import {useNavigation, useRoute} from '@react-navigation/native';

const LoginScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex flex-col bg-white h-screen">
      {/* Image Background */}
      <ImageBackground
        className="h-screen"
        source={require('../../assets/ig-bg.jpg')}
        resizeMode="cover">
        {/* UpperSection */}
        <Text className="text-center mt-4">English (UK)</Text>
        <View className="flex-1 items-center justify-center">
          <Image
            className="h-16 w-16"
            source={require('../../assets/ig-logo.png')}
          />
        </View>
        {/* MiddleSection */}
        <View className="flex-1 flex-col justify-center mx-4 space-y-4">
          {/* Username Button */}
          <View>
            <FormComp
              isSecure={false}
              icon=""
              placeholder="Username, email address or mobile number"
            />
          </View>
          {/* Password Button */}
          <View>
            <FormComp icon="eye" isSecure={true} placeholder="Password" />
          </View>
          {/* Login Button */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tes' as never);
            }}
            activeOpacity={0.7}
            className="bg-blue-600 rounded-full h-10 justify-center">
            <Text className="color-white text-center text-base font-semibold">
              Log In
            </Text>
          </TouchableOpacity>
          {/* Forgot Password */}
          <TouchableOpacity>
            <Text className="text-center text-base font-medium color-black">
              {' '}
              Forgotten Password?
            </Text>
          </TouchableOpacity>
        </View>
        {/* LowerSection */}
        <View className="flex-1 flex-col items-center justify-end mx-4 ">
          {/* Create New Account Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded-full border-blue-600 border h-12 justify-center w-full">
            <Text className="color-blue-600 text-center text-base font-semibold">
              Create new account
            </Text>
          </TouchableOpacity>
          <View className="-my-4">
            <MetaLogo width={75} height={75}></MetaLogo>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
