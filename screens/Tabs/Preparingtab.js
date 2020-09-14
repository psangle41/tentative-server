import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions,TouchableOpacity,UIManager,LayoutAnimation} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Arrow from '../img/arrow'


import {orderStatus} from './Database'



const Preparingtab=()=>{
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf'),
        "Inter-SemiBoldItalic":
          "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

      const renderItem = ({ item }) => {
        

        return (
            item.state=="Prep"?
            <View style={styles.tabbContainer}>
                
                <View style={styles.numberContainer}>
                    <Text style={{paddingRight:20}}>
                        {item.num}
                    </Text>
                </View>
                
                <View style={styles.statusBox}>
                    <View style={{height:windowHeight*0.15,width:windowWidth*0.016,backgroundColor:backgroundColor}} />
                    <View style={{height:windowHeight*0.1,width:windowWidth*0.2,justifyContent:"center",alignItems:'center',left:-windowWidth*0.05}}>
                        <Text style={{transform: [{ rotate: '270deg'}],fontFamily:'Poppins-Light',fontSize:18}}>{item.state}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.texxt} >
                    <Text style={{fontSize:18,fontFamily:"Poppins-Light"}}>{item.name}</Text>
                    <Text style={{fontSize:18,fontFamily:"Poppins-Light",paddingTop:10}}>{item.code}/{item.amount}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:windowWidth*0.8,justifyContent:"center"}} onPress={() => navigation.navigate('Split')}> 
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

export default Preparingtab;