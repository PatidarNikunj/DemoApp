import * as React from 'react';
import CommonView from '../Component/CommonView';
import CustomButton from '../Component/CustomButton';
import {ScreenProps} from '../Utils/AppInterfaces';

const DetailsScreen: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <CommonView navigation={navigation} header={'Your Orders'}>
      <CustomButton title={'Details Screen'} />
    </CommonView>
  );
};

export default DetailsScreen;
