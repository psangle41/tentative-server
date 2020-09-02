
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import MainTabScreen from './screens/MainTabScreen'
import SignInScreen from './screens/SignInScreen'
import {AuthContext} from './screens/context'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(()=>({
    signIn:(username, password)=>{

      if(username=='user' && password=='pass'){
        setUserToken('bnxn');
        setIsLoading(false);

      }else{

      setUserToken('hg');
      setIsLoading(false);
      }
    },
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
          <Drawer.Screen name="Home" component={MainTabScreen} />
        </Drawer.Navigator>
      ) 
      :
      <SignInScreen/>
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
