import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import NewOrder from './Tabs/NewOrder1';
import Preparingtab from './Tabs/Preparingtab1';
import Ready from './Tabs/Ready1';
import All from './Tabs/All'
import ServerImg from './img/server'
import Menu from './img/menu'




const ChefScreen=({navigation})=>{

    
   const [tab, setTab] = React.useState(3);
   let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  font1=font2=font3=font4="#9a9795"

    
    switch (tab) {
        case 0:{
        var  font1 = "#ffffff";
        var leftShift=0;
          break;}
        case 1:{
        var  font2 = "#ffffff";
        var leftShift=0+windowWidth/4;
            break;}
        case 2:{
            var  font3 = "#ffffff";
            var leftShift=0+windowWidth/2;
            break;}
        case 3:{
            var  font4 = "#ffffff";
            var leftShift=3*windowWidth/4;
            break;}

       
      }
      if (!fontsLoaded) {
        return <AppLoading />;}
        else{

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.ContainerOne}/>
                    

                <View style={styles.ContainerTwo}>
                    <TouchableOpacity ><Menu style={styles.menuImg}/></TouchableOpacity>
                    <Text style={{color: '#ffffff',fontFamily:"Poppins-Light",fontSize:19,lineHeight:29, left:0.12*windowWidth, top:10}}>54th Ave, Marques St..</Text>
                    <View style={{flexDirection:"row",top:35}}>
                        <View style={styles.titleTag}>
                            <Text style={{fontFamily:'Poppins-Light',color:'#ff264d',fontSize:19,lineHeight:29}}>Mike's cafe</Text>
                        </View>
                        <ServerImg style={{left: windowWidth*0.45}} />
                    </View>
                </View>
            </View>

            <View style={styles.statusContainer}>
                <View style={styles.tabContainer}>
                    <View style={{flex:1,backgroundColor:'#ff264d',position:"absolute",top:windowHeight*0.005,width:windowWidth/4-5,height:windowHeight*0.05,left:leftShift,borderRadius:20}}/>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(0)} >
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:font1, textAlign:"center"}} >New Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(1)} >
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:font2, textAlign:"center",}}>Preparing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(2)} >
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:font3, textAlign:"center",}}>Ready</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(3)}>
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:font4, textAlign:"center",}}>All</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:2,flexDirection:"row",backgroundColor:'#e5e5e5', borderBottomColor:5}}>
                    {tab==0?<NewOrder/>:tab==1?<Preparingtab/>:tab==2?<Ready/>:<All/>}

                </View>
            </View>   
        </View>

          
    );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    ContainerOne:{
        flex:0.1,
        backgroundColor:'#ffaacc',
    },
    ContainerTwo:{
        flex:1,
        backgroundColor:'#ff264d',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,

    },
    titleContainer:{
        flex:1,
        backgroundColor:'#ffffff',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
    },
    menuImg:{
        top:0.015*windowHeight,
        left:0.85*windowWidth,
    },
    titleTag:{
        backgroundColor:'#ffffff',
        width:0.32*windowWidth,
        left:0.12*windowWidth,
        height:0.06*windowHeight,
        borderRadius:20,
        alignItems:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    serverImg:{ 
        height:140, 
        width:70,
        left:0.45*windowWidth,
        resizeMode:"cover",
        alignItems:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    
    statusContainer:{
        flex:2
    },
    
    tabContainer:{
        flexDirection:"row",
        borderBottomColor:'#989494',
        height:0.07*windowHeight,
        borderBottomWidth:2
    },
    button:{
        flex:1,
        height:0.06*windowHeight, 
        alignItems:"center", 
        justifyContent:"center",

    },
})

function useFonts(fontMap) {
    let [fontsLoaded, setFontsLoaded] = useState(false);
    (async () => {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    })();
    return [fontsLoaded];
  }
export default ChefScreen;