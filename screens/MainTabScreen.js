
import React from 'react';
import { Text, View, Dimensions,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const windowHeight = Dimensions.get('window').height;


import ServerScreen from './ServerScreen';
import ChefScreen from './ChefScreen';
import BillScreen from './BillScreen';
import SplitAmountScreen from './SplitAmountScreen';
import ServerIcon from './Icons/ServerIcon'
import ChefIcon from './Icons/ChefIcon'
import BillIcon from './Icons/BillIcon'
import AddCustomer from './AddCustomer'



const Tab = createBottomTabNavigator();
const ServerStack = createStackNavigator();
const SplitScreenStack = createStackNavigator();
const AddCustomerStack= createStackNavigator();
let props1;

const MainTabScreen = ({route}) => {
  const { isEnabled } = route.params;
  const { isEnabled1 } = route.params;
  const { isEnabled2 } = route.params;

  return(
  <ServerStack.Navigator headerMode='none'>
      <ServerStack.Screen name="home" component={HomeTabs}  initialParams={{isEnabled,isEnabled1,isEnabled2}} />
      <SplitScreenStack.Screen name="Split" component={SplitAmountScreen}/>
      <AddCustomerStack.screen name="AddCustom" component={AddCustomer} />
  </ServerStack.Navigator>
  
)};

  
function HomeTabs({route}) {
  
  props1=route.params
   
  return (
    <Tab.Navigator
    
    tabBar={(props) => <MyTabBar {...props} />}
    
  >
    <Tab.Screen name="Server" component={ServerScreen}/>
    <Tab.Screen name="Chef" component={ChefScreen} />
    <Tab.Screen name="Bill" component={BillScreen}
      
    />
    
  </Tab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation,}) {
  const  isEnabled  = props1.isEnabled;
  const  isEnabled1  = props1.isEnabled1;
  const isEnabled2  = props1.isEnabled2;
   
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row',height:windowHeight*0.075,backgroundColor:"#ffffff" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const color =isFocused? "#ff264d" :"#707070"


        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented&&(isEnabled&&isEnabled1&&isEnabled2)) {
            navigation.navigate(route.name)
          }
          
          else if(!isFocused && !event.defaultPrevented&&(isEnabled&&isEnabled1&&(route.name=='Server'||route.name=='Chef'))){
            navigation.navigate(route.name)

          }
          else if(!isFocused && !event.defaultPrevented&&(isEnabled&&isEnabled2&&(route.name=='Server'||route.name=='Bill'))){
            navigation.navigate(route.name)
          }
          else if(!isFocused && !event.defaultPrevented&&(isEnabled&&isEnabled2&&(route.name=='Server'||route.name=='Bill'))){
          }
          else if(!isFocused && !event.defaultPrevented&&(isEnabled&&route.name=='Server')){
            navigation.navigate(route.name)
          }
          else if(!isFocused && !event.defaultPrevented&&(isEnabled1&&route.name=='Chef')){
            navigation.navigate(route.name)
          }
          else if(!isFocused && !event.defaultPrevented&&(isEnabled2&&route.name=='Bill')){
            navigation.navigate(route.name)
          }
          else{
            
          }
          
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1,justifyContent:"center",alignItems:"center",alignContent:"center" }}
          >
            <Text style={{ color: isFocused ? '#ff264d' : '#707070' }}>
              {label}
            </Text>
            {route.name=='Server'?<ServerIcon iconColor={color}/>:route.name=='Chef'?<ChefIcon iconColor={color}/>:<BillIcon iconColor={color}/>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

  
export default MainTabScreen;