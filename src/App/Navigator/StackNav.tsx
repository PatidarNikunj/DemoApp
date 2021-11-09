/**
 * Stack Nav is the base class for exporting the Stack of view/screen
 * Contains Home Screen, List Screen and Details Screen
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/HomeScreen';
import ListScreen from '../Screens/ListScreen';
import {DrawerItems} from '../Utils/Contants';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Details: undefined;
};

//Here, I've not mapped the array items to generate a list from Constants.tsx class
const HomeStack = createStackNavigator<RootStackParamList>();
const StackNav: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="List"
        component={ListScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default StackNav;
