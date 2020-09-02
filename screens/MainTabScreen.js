
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServerScreen from './ServerScreen';
import ChefScreen from './ChefScreen';
import BillScreen from './BillScreen';

import * as Font from 'expo-font';



const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Server"
      tabBarOptions={{
        activeTintColor: '#ff264d',
        inactiveTintColor: 'gray',
      
      }}
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Server"
        component={ServerScreen}
        
        options={{
          tabBarLabel: 'Server',
          tabBarColor: '#009387',
          
        }}
      />
      <Tab.Screen
        name="Chef"
        component={ChefScreen}
        options={{
          tabBarLabel: 'Chef',
          tabBarColor: '#1f65ff',
          
        }}
      />
      <Tab.Screen
        name="Bill"
        component={BillScreen}
        options={{
          tabBarLabel: 'bill',
          tabBarColor: '#694fad',
         
        }}
      />
      
    </Tab.Navigator>
);



  
export default MainTabScreen;