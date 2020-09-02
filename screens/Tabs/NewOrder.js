import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,FlatList} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {orderStatus} from './Database'




const NewOrder=()=>{
    const [selectedId, setSelectedId] = useState(null);
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
            item.state=="New"?
            <View style={styles.tabbContainer}>
                <View style={styles.numberContainer}>
                    <Text style={{paddingRight:20}}>
                        {item.num}
                    </Text>
                </View>
                <View style={styles.statusBox}>
                <View style={{height:windowHeight*0.13, width:windowWidth*0.015,backgroundColor:backgroundColor}} />

                    <Text style={{transform: [{ rotate: '270deg'}],fontFamily:'Poppins-Light',fontSize:14}}>{item.state}</Text>
                </View>
                <View style={styles.texxt}>
                    <Text style={{fontSize:18,fontFamily:"Poppins-Light"}}>{item.name}</Text>
                    <Text style={{fontSize:18,fontFamily:"Poppins-Light",paddingTop:10}}>{item.code}</Text>

                </View>
                
                
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
        height:windowHeight*0.13,
        borderBottomWidth:2,
        borderBottomColor:'#a9a9a9',
        flexDirection:'row'

    },
    
    statusBox:{
        height:windowHeight*0.25,
        width:windowWidth*0.1,
        backgroundColor: "#ffffff",
        height:windowHeight*0.13,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomColor:'#a9a9a9',
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"row"
        
    },
    numberContainer:{
        position:"absolute",
        top:windowHeight*0.02,
        
        width:windowWidth*0.2,
        backgroundColor: "#ffffff",
        height:windowHeight*0.09,
        borderTopWidth:2,
        borderBottomColor:'#a9a9a9',
        borderTopColor:'#a9a9a9',
        borderRightWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomWidth:2,
        borderBottomColor:'#a9a9a9',
        alignItems:"flex-end",
        justifyContent:"center",
        borderBottomRightRadius:40,
        borderTopRightRadius:40
    },
    texxt:{
        position:'absolute',
        height:windowHeight*0.25,
        left:100,
        backgroundColor: "#ffffff",
        height:windowHeight*0.13,
        borderBottomWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomColor:'#a9a9a9',
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


export default NewOrder;