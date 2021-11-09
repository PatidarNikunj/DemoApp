import * as React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from '../Utils/Colors';

//Interface for extending the PropTypes
interface Props {
  title: string; //Mandatory Property
  onPress?: null | ((event: GestureResponderEvent) => void); //Optional Property
}

//Extending FC with interface Prop
const CustomButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <>
      <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 'auto',
    borderRadius: 10,
    backgroundColor: Colors.COLOR_BLACK,
    padding: 12,
  },
  title: {fontSize: 26, color: Colors.COLOR_WHITE},
});
