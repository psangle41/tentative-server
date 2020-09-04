import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import SignInScreen from './SignInScreen';
import RoleSelectionScreen from './RoleSelectionScreen'
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Role Selection" component={RoleSelectionScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;