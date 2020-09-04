
import React from 'react';
import { StyleSheet, Text, View, Dimensions,FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ServerScreen from './ServerScreen';
import ChefScreen from './ChefScreen';
import BillScreen from './BillScreen';
import SplitAmountScreen from './SplitAmountScreen';

import ServerIcon from './Icons/ServerIcon'
import ChefIcon from './Icons/ChefIcon'
import BillIcon from './Icons/BillIcon'

const Tab = createBottomTabNavigator();
const ServerStack = createStackNavigator();
const SplitScreenStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Server"
    tabBarOptions={{
      activeTintColor: '#ff264d',
      inactiveTintColor: 'gray',
    }}
    barStyle={{ backgroundColor: '#ffffff' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName=route.name;
        color =focused? "#ff264d" :"#707070"
        return (iconName=='Server'?<ServerIcon iconColor={color}/>:iconName=='Chef'?<ChefIcon iconColor={color}/>:<BillIcon iconColor={color}/>);
      },
    })}
  >
    <Tab.Screen
      name="Server"
      component={ServerStackScreen}
      
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
        tabBarLabel: 'Bill',
        tabBarColor: '#694fad',
        
      }}
    />
    
  </Tab.Navigator>
);

  
const ServerStackScreen = ({navigation}) => (
    <ServerStack.Navigator headerMode='none'>
      <ServerStack.Screen name="Server" component={ServerScreen} />
      <SplitScreenStack.Screen name="Split" component={SplitAmountScreen}/>
    </ServerStack.Navigator>
  );
  


  
export default MainTabScreen;