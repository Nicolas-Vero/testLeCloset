import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Splashscreen from '../splashscreen';
import Home from '../home';
import PlayerDetails from '../playerDetails';
const screenOptionsRoot: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
};

const Stack = createNativeStackNavigator();
const RootNavigator = () => (
  <>
    <Stack.Navigator>
      <Stack.Group screenOptions={screenOptionsRoot}>
        <Stack.Screen name={'Splash'} component={Splashscreen} />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'PlayerDetails'} component={PlayerDetails} />
      </Stack.Group>
    </Stack.Navigator>
  </>
);

export type RootNavigatorParamList = {
  Home: undefined;
  PlayerDetails: undefined;
};

export const useRootNavigation = useNavigation<
  NativeStackNavigationProp<RootNavigatorParamList>
>;

export default RootNavigator;
