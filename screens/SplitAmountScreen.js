import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';

import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LeftArrow from './img/leftArrow'
import {} from './Tabs/CustomerDatabase'


const SplitAmountScreen=({navigation})=>{

    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
        "Inter-SemiBoldItalic":
          "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{flex:1}}>
                <View style={styles.TitleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Server')}>
                        <LeftArrow style={{left:windowWidth*0.01}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Split Amount</Text>
                </View>
                <View>
                    <Text></Text>
                </View>
             </View>
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


export default SplitAmountScreen;