/**
 * Drawer Nav is the base class for exporting the Drawer Navigation menu
 * Contains a list of Screen i.e. Home Screen,COntact Screen, List Screen and Details Screen
 */

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Animated, {interpolate} from 'react-native-reanimated';
import withTransitionHOC from '../Component/withTransitionHOC';
import {Colors} from '../Utils/Colors';
import {DrawerItems} from '../Utils/Contants';

export const AnimatedContext = React.createContext<any>(void 0);

//Custom Drawer view with custom interpolation to the view and a custom view items
const CustomDrawerContent = (props: any) => {
  //Interpolating the View by Y-Axis(Vertically) from 0 to 80
  const translateY = interpolate(props.progress, {
    inputRange: [0, 1],
    outputRange: [0, 120],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{translateY}],
      }}>
      <DrawerContentScrollView>
        <Text style={styles.drawerTitle}>Beka</Text>
        <View style={styles.drawerItemContainer}>
          <DrawerItemList
            inactiveBackgroundColor={Colors.DRAWER_ITEM_TEXT_INACTIVE_BG_COLOR}
            inactiveTintColor={Colors.DRAWER_ITEM_TEXT_INACTIVE_TINT_COLOR}
            activeBackgroundColor={Colors.DRAWER_ITEM_TEXT_ACTIVE_BG_COLOR}
            activeTintColor={Colors.DRAWER_ITEM_TEXT_ACTIVE_TINT_COLOR}
            labelStyle={styles.drawerTextStyle}
            itemStyle={styles.drawerItemStyles}
            {...props}
          />
          <View style={styles.itemDivider} />
          {SignOutItem()}
        </View>
      </DrawerContentScrollView>
    </Animated.View>
  );

  // Used normal function for Sign Out menu item
  function SignOutItem() {
    return (
      <DrawerItem
        label="Sign Out"
        onPress={() => {
          Alert.alert('Sign out', 'Are you sure you want to sign out?', [
            {
              text: 'Cancel',
              onPress: () => props.navigation.toggleDrawer(),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                console.log('Signed out!');
                props.navigation.toggleDrawer();
              },
            },
          ]);
        }}
        inactiveBackgroundColor={Colors.DRAWER_ITEM_TEXT_INACTIVE_BG_COLOR}
        inactiveTintColor={Colors.DRAWER_ITEM_TEXT_INACTIVE_TINT_COLOR}
        activeBackgroundColor={Colors.DRAWER_ITEM_TEXT_ACTIVE_BG_COLOR}
        activeTintColor={Colors.DRAWER_ITEM_TEXT_ACTIVE_TINT_COLOR}
        labelStyle={styles.drawerTextStyle}
        style={styles.drawerSignOutItem}
      />
    );
  }
};

const RootDrawer = createDrawerNavigator();
const DrawerNav = () => {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  return (
    <AnimatedContext.Provider value={animatedValue}>
      <NavigationContainer>
        <RootDrawer.Navigator
          drawerStyle={styles.drawerNavigator}
          drawerType={'back'}
          initialRouteName={DrawerItems[0].key}
          overlayColor="transparent"
          drawerContent={(props: any) => {
            setAnimatedValue(props.progress);
            return <CustomDrawerContent {...props} />;
          }}>
          {/* Here, I've mapped the array items to generate a list from Constants.tsx class => DrawerItems constant */}
          {DrawerItems.map(it => {
            const {key, title, component} = it;
            return (
              <RootDrawer.Screen
                name={key}
                component={withTransitionHOC(component)}
                options={{title: title}}
              />
            );
          })}
        </RootDrawer.Navigator>
      </NavigationContainer>
    </AnimatedContext.Provider>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  drawerNavigator: {
    width: '60%',
    borderTopLeftRadius: 30,
    backgroundColor: Colors.DRAWER_BG_COLOR,
  },
  drawerTitle: {
    width: '100%',
    color: Colors.DRAWER_ITEM_HEADER_COLOR,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drawerItemContainer: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 30,
  },
  drawerTextStyle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '400',
  },
  drawerItemStyles: {
    width: 'auto',
    borderRadius: 10,
    paddingLeft: 10,
  },
  itemDivider: {
    height: 1,
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: Colors.DRAWER_DIVIDER_COLOR,
  },
  drawerSignOutItem: {
    width: 'auto',
    paddingLeft: 15,
    paddingRight: 30,
  },
});
