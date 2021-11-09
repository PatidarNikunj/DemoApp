import * as React from 'react';
import CommonView from '../Component/CommonView';
import CustomButton from '../Component/CustomButton';
import {ScreenProps} from '../Utils/AppInterfaces';

const ListScreen: React.FC<ScreenProps> = ({navigation}) => {
  const gotoInnerScreen = () => {
    navigation.navigate('Details');
  };

  return (
    <>
      <CommonView navigation={navigation} header={'Favorite'}>
        <CustomButton title={'Goto Detail Screen'} onPress={gotoInnerScreen} />
      </CommonView>
    </>
  );
};

export default ListScreen;
