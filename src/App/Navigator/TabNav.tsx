/**
 * Tab Nav is the base class for exporting the Tabular based of view/screen
 * Contains Home Screen and Contact Screen
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactScreen from '../Screens/ContactScreen';
import {Colors} from '../Utils/Colors';
import StackNav from './StackNav';

type RootTabParamList = {
  StackNav: undefined;
  Contact: undefined;
};

const RootTab = createBottomTabNavigator<RootTabParamList>();

const TabNav: React.FC = () => {
  return (
    <RootTab.Navigator
      initialRouteName="StackNav"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'StackNav') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'people-circle' : 'people-circle-outline';
          } else {
            iconName = focused ? 'people-circle' : 'people-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.ACTIVE_TINT_COLOR,
        inactiveTintColor: Colors.INACTIVE_TINT_COLOR,
      }}>
      <RootTab.Screen
        name="StackNav"
        component={StackNav}
        options={{title: 'Home'}}
      />
      <RootTab.Screen name="Contact" component={ContactScreen} />
    </RootTab.Navigator>
  );
};

export default TabNav;
