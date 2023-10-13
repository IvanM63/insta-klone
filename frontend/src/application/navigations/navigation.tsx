import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../presentation/screens/Splashscreen/splash.screen';
import HomeScreen from '../../presentation/screens/Home/home.screen';
import LoginScreen from '../../presentation/screens/Auth/login.screen';
import {useDispatch} from 'react-redux';
import Tes from '../../presentation/screens/Auth/tes.screen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  const [isReady, setIsReady] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const dispatch = useDispatch();

  const init = async () => {
    //await dispatch(Init());
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  };

  useEffect(() => {
    init();
  });

  return (
    <NavigationContainer>
      {isReady === false ? (
        <SplashStack />
      ) : token === null ? (
        <AuthStack />
      ) : (
        <HomeStack />
      )}
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        statusBarColor: 'white',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tes" component={Tes} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function SplashStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarHidden: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return <RootNavigation />;
}
