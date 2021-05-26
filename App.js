//Nazerke Yegemberdi, 20MD0159

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './HomeScreen'
import WeatherDay from './UserDescription'

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  WeatherDay: WeatherDay,
});

const App = createAppContainer(MainNavigator);

export default App;
