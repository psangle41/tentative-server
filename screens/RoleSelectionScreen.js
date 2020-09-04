import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,Switch} from 'react-native';

import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LeftArrow from './img/leftArrow'
import {CustomerOrder} from './Tabs/CustomerDatabase'


const RoleSelectionScreen=({navigation})=>{

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
        "Inter-SemiBoldItalic":
          "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
    }

    const Roles=()=>{
        return(
            <View style={{width: windowWidth, height:30,flexDirection:"row",top:150,}}> 
                <Text style={{fontFamily:'Poppins-Light',color:'#ff264d',fontSize:19,lineHeight:29,left:50}}>Server</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#ff264d" }}
                    thumbColor={isEnabled ? "#ffffff" : "#c4c4c4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{width:90,height:30,left:80}}
                />
            </View>
            
        )
    }
    
    
        return (
            <View style={{flex:1}}>
                <View style={styles.TitleContainer}>
                    
                </View>
                
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000000',fontSize:14,lineHeight:29,top:100}}>Please Select your Roles</Text>
                    <Text style={{fontFamily:'Poppins-Light',color:'#000000',fontSize:14,lineHeight:29,top:100}}>Multiple selection is available</Text>

                    <Roles issEnable={isEnabled} toggle={toggleSwitch}/>
                    <Roles issEnable={isEnabled1} toggle={toggleSwitch1}/>
                    <Roles issEnable={isEnabled2} toggle={toggleSwitch2}/>

                    <TouchableOpacity >
                        <View style={{width:150,height:51, backgroundColor:"#ff264d",top:300,borderRadius:40,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontFamily:'Poppins-Light',color:'#ffffff',fontSize:15,lineHeight:29,}}>Save</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                
             </View>
        );
    

    
}

const styles=StyleSheet.create({
    TitleContainer:{
        width:windowWidth,
        height:windowHeight*0.1,
        paddingTop: windowHeight*0.05,
        alignItems:'center',
        backgroundColor:'#ff264d',
        flexDirection:"row",
borderBottomLeftRadius:20,
borderBottomRightRadius:20    },
    title:{
        fontFamily: 'Roboto',
        color:'#ffffff',
        fontSize:24,
        lineHeight:28,
        left:windowWidth*0.28
        
    }
})

function useFonts(fontMap) {
    let [fontsLoaded, setFontsLoaded] = useState(false);
    (async () => {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    })();
    return [fontsLoaded];
  }


export default RoleSelectionScreen;