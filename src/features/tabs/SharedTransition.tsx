import React, {FC} from 'react';
import UserBottomTab from './UserBottomTab';
import {SharedStateProvider} from './SharedContext';
import {Colors} from '../../utils/Constants';
import {StatusBar} from 'react-native';

const SharedTransition: FC = () => {
  return (
    <SharedStateProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.background}
        // backgroundColor="orange"
      />
      <UserBottomTab />
    </SharedStateProvider>
  );
};

export default SharedTransition;
