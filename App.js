
import React, {useEffect } from 'react';
import { View,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen'
import RoleSelectionScreen from './screens/RoleSelectionScreen'
import {AuthContext} from './screens/context'

const RootStack = createStackNavigator();

const Drawer = createDrawerNavigator();


export default function App(){

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [userToken1, setUserToken1] = React.useState('frf');

  const [isEnabled, setIsEnabled] = React.useState(true);
  const [isEnabled1, setIsEnabled1] = React.useState(true);
  const [isEnabled2, setIsEnabled2] = React.useState(true);



  const authContext = React.useMemo(()=>({
    
    signIn:(username, password)=>{

      if(username=='user' && password=='pass'){

        setUserToken(null);
        setUserToken1(null);
        setIsLoading(false);

      }else{
      setUserToken(null);
      setUserToken1('jnu');
      setIsLoading(false);
      }
    },
    RoleSelected:(isSelect,val1,val2,val3)=>{

      if(isSelect){
        setUserToken('bnxn');
        setIsLoading(false);
        setIsEnabled(val1);
        setIsEnabled1(val2);
        setIsEnabled2(val3)

      }else{
      setUserToken1(null);
      setIsLoading(false);
      }
    }
  }))

  useEffect(() =>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);

  }, []);

  if (isLoading){
    return(
      <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  };

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken !== null ?(
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} initialParams={{isEnabled,isEnabled1,isEnabled2}}/>
        </Drawer.Navigator>
      ) 
      :

      <RootStack.Navigator headerMode='none' initialRouteName='SignInScreen'>
        { userToken1 !== null ?(
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        )
        :
        <RootStack.Screen name="Role Selection" component={RoleSelectionScreen}/>}
      </RootStack.Navigator>
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}


