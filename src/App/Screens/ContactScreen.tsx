import * as React from 'react';
import CommonView from '../Component/CommonView';
import CustomButton from '../Component/CustomButton';
import {ScreenProps} from '../Utils/AppInterfaces';

const ContactScreen: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <CommonView navigation={navigation} header={'Your Cart'}>
      <CustomButton title={'This is Contact Screen'} />
    </CommonView>
  );
};

export default ContactScreen;
