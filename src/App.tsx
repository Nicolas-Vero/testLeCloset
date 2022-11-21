import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import Router from './component/Router';
import {store} from './core/redux/store';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Router />
    </Provider>
  </NavigationContainer>
);

export default App;
