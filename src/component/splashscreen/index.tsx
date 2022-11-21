import React, {useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useRootNavigation} from '../navigation/RootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Splashscreen = () => {
  const {navigate} = useRootNavigation();
  useEffect(() => {
    if (Platform.OS == 'android') SplashScreen.hide();
    setTimeout(() => {
      navigate('Home');
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Splashscreen;
