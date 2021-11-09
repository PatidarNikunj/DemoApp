import * as React from 'react';
import CommonView from '../Component/CommonView';
import CustomButton from '../Component/CustomButton';
import { ScreenProps } from '../Utils/AppInterfaces';

const HomeScreen: React.FC<ScreenProps> = ({navigation}) => {
  const gotoInnerScreen = () => {
    navigation.navigate('List');
  };

  return (
    <CommonView navigation={navigation} header={'Start'}>
      <CustomButton title={'Goto List Screen'} onPress={gotoInnerScreen} />
    </CommonView>
  );
};

export default HomeScreen;
