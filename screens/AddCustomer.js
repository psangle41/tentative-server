import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,FlatList} from 'react-native';

import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LeftArrow from './img/leftArrow'
import {CustomerOrder} from './Tabs/CustomerDatabase'


const AddCustomer=({navigation})=>{
    const [selectedId, setSelectedId] = useState(null);
    let i=0


    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
        "Inter-SemiBoldItalic":
          "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
    }
    const renderItem = ({ item ,index}) => {
        return (
            <View style={{borderBottomWidth:2,borderBottomColor:'#a9a9a9',top:0.03*windowHeight}}>
                
            </View>
        );
    };

    return(

        <View style={{flex:1}}>
            <View style={styles.TitleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Server')}>
                    <LeftArrow style={{left:windowWidth*0.01}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Split Amount</Text>
            </View>
            <Text style={{fontFamily:"Poppins-Light",color:"#000000",fontSize:18,left:20,marginTop:10}}>Order Details</Text>
            <Text style={{fontFamily:"Poppins-Light",color:"#ff264d",fontSize:18,left:20,}}>Table 7</Text>
            <FlatList
                data={CustomerOrder}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
                
                <TouchableOpacity style={styles.billText}  onPress={() => navigation.navigate('Split')}>
                    <Text style={{fontFamily:"Poppins-Light",color:"#ffffff",fontSize:22,}}>Bill This</Text>
                </TouchableOpacity>

                

        </View>
        
    )
}

const styles=StyleSheet.create({
    TitleContainer:{
        width:windowWidth,
        height:windowHeight*0.1,
        paddingTop: windowHeight*0.05,
        alignItems:'center',
        backgroundColor:'#ff264d',
        flexDirection:"row"
    },
    title:{
        fontFamily: 'Roboto',
        color:'#ffffff',
        fontSize:24,
        lineHeight:28,
        left:windowWidth*0.28
        
    },
    titleTextContainer:{
        fontFamily:"Poppins-Light",
        color:"#ff264d",
        fontSize:14,
        marginBottom:5
    },
    detailsTextContainer:{
        fontFamily:"Poppins-Light",
        color:"#666161",
        fontSize:16,
        marginBottom:5

    },
    detailsTextContainer2:{
        fontFamily:"Poppins-Light",
        color:"#2699fb",
        fontSize:16,
        marginBottom:5

    },
    bottomText:{
        fontFamily:"Poppins-Light",
        color:"#000000",
        fontSize:14,
        marginBottom:5

    },
    bottomText2:{
        fontFamily:"Poppins-Light",
        color:"#ff264d",
        fontSize:14,
        marginBottom:5,
        

    },
    billText:{
        height:windowHeight*0.07,
        width:windowWidth*0.35,
        backgroundColor:"#ff264d",
        marginTop:windowHeight*0.002, 
        marginRight:windowWidth*0.06,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    }

})


export default AddCustomer;
function useFonts(fontMap) {
    let [fontsLoaded, setFontsLoaded] = useState(false);
    (async () => {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    })();
    return [fontsLoaded];
  }