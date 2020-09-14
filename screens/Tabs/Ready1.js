import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions,TouchableOpacity,} from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {orderStatus} from './Database'
import Arrow from '../img/arrow'






const Ready1=({})=>{
    const [selectedId, setSelectedId] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(0);
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf'),
        "Inter-SemiBoldItalic":
          "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
        
      }
      const renderItem = ({ item }) => {
        const backgroundColor = item.state === "Prep"? "#f7a500" : item.state === "Ready"?"#00b406":"#e81111";
       
        return (
            item.state=="Ready"?
            <View style={styles.tabbContainer}>
                <View style={styles.numberContainer}>
                <Text style={{paddingRight:20,fontSize:18,fontFamily:"Poppins-Light"}}>
                        {item.num}
                    </Text>
                </View>
                <View style={styles.statusBox}>
                    <View style={{height:windowHeight*0.15,width:windowWidth*0.016,backgroundColor:backgroundColor}} />
                    <View style={{height:windowHeight*0.1,width:windowWidth*0.2,justifyContent:"center",alignItems:'center',left:-windowWidth*0.05}}>
                        <Text style={{transform: [{ rotate: '270deg'}],fontFamily:'Poppins-Light',fontSize:18}}>{item.state}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.texxt}>
                    <Text style={{fontSize:18,fontFamily:"Poppins-Light"}}>{item.name}</Text>
                    <Text style={{fontSize:18,fontFamily:"Poppins-Light",paddingTop:10}}>{item.code}/{item.amount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:windowWidth*0.8,justifyContent:"center"}} onPress = {() => console.log('nbh')}> 
                        <Arrow/>
                </TouchableOpacity>
                            
            </View>
            :null
        );
      };

    return(
        
        <FlatList
                data={orderStatus}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
        />
    )
}

const styles=StyleSheet.create({
    tabbContainer:{
        flex:1,
        backgroundColor: "#ffffff",
        height:windowHeight*0.15,
        borderBottomWidth:2,
        borderBottomColor:'#a9a9a9',
        flexDirection:'row'

    },
    
    statusBox:{
        backgroundColor: "#ffffff",
        alignItems:'center',
        height:windowHeight*0.15,
        width:windowWidth*0.13,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomColor:'#a9a9a9',
        backgroundColor:"#ffffff",
        flexDirection:'row',  
        elevation:10   
        
    },
    numberContainer:{
        position:"absolute",
        top:windowHeight*0.01,
        width:windowWidth*0.23,
        backgroundColor: "#ffffff",
        height:windowHeight*0.108,
        borderTopWidth:2,
        borderBottomColor:'#a9a9a9',
        borderTopColor:'#a9a9a9',
        borderRightWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomWidth:2,
        borderBottomColor:'#a9a9a9',
        alignItems:"flex-end",
        justifyContent:"center",
        borderBottomRightRadius:50,
        borderTopRightRadius:50,
        elevation:10
    },
    texxt:{
        position:'absolute',
        height:windowHeight*0.25,
        left:100,
        backgroundColor: "#ffffff",
        height:windowHeight*0.13,
        borderRightColor:'#a9a9a9',
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

export default Ready1;