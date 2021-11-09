import * as React from 'react';
import {LogBox, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Utils/Colors';
import {Icons} from '../Utils/Contants';
LogBox.ignoreAllLogs();

//Interface for extending the PropTypes
interface Props {
  navigation: any; //Mandatory Property
  header?: string; //Optional Property
  children?: React.ReactChild; //Optional Property
}

//Extending FC with interface Prop
const CommonView: React.FC<Props> = ({navigation, header, children}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        hidden={false}
        backgroundColor={Colors.COLOR_TRANSPARENT}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons
            name={Icons.menuIcon}
            size={50}
            color={Colors.HAMBURGER_MENU_TINT_COLOR}
            onPress={() => navigation.toggleDrawer()}
          />
          <Text style={styles.headerTitle}>{header?.toUpperCase()}</Text>
        </View>
        <View style={styles.body}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default CommonView;

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // padding: 10,
    paddingLeft: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 26,
    marginStart: 20,
    fontWeight: '400',
    letterSpacing: 5,
    color: Colors.HEADER_TITLE_COLOR,
  },
  body: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
