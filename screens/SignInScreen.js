import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, Button,TextInput,TouchableOpacity,Dimensions} from 'react-native';

import {AuthContext} from '../screens/context'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SignInScreen=({navigation})=>{

    const { signIn } = React.useContext(AuthContext)
    
    const [data, setData] = React.useState({
        username: '',
        password: '',
        
    });
    
    const textInputChange = (val) => {       
        setData({
            ...data,
            username: val,
        });
        
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        }); 
    }

    const loginHandle=(username, password) =>{
        signIn(username, password)
    }

    

        
    return (
        
        <ImageBackground source= {require('../screens/img/background.png')} style={styles.image}>
            <View style={styles.container}>
                <Image style ={styles.logo} source= {require('../screens/img/swiggy.png')}/>            
                <Text style={styles.tagline}>Own the best Experience</Text>
                <View style={styles.ipScreen} top={450} >
                    <TextInput style ={styles.inputBox} placeholder="Username" placeholderTextColor="#000000" onChangeText={(val) => textInputChange(val)} />
                </View>
                <View style={styles.ipScreen} top={530}>
                    <TextInput style ={styles.inputBox} placeholder="Password" placeholderTextColor="#000000" secureTextEntry={true}  onChangeText={(val) => handlePasswordChange(val)}  />
                </View>
                <TouchableOpacity  style={styles.button} onPress={()=>{loginHandle(data.username, data.password)}}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
          
    );

}

const styles=StyleSheet.create({
    
    image:{
        flex:1, 
        
         
    },
    container:{
        flex:1,
        backgroundColor:"rgba(16,16,16,0.88)",
        alignItems:"center",
        justifyContent:"center"
    },
    logo:{
        position: "absolute",
        width: 125,
        height: 184,
        top: 120,
        borderRadius: 3,
        borderColor: '#ffffff'
    },
    tagline:{
        position: "absolute",
        width: 289,
        height: 55,
        top: 388.35,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 26,
        lineHeight: 30,
        display: 'flex',
        alignItems: 'center',
        textAlign: "center",
        color: '#ffffff'

    },
    ipScreen:{
        position: "absolute",
        height:windowHeight*0.05,
        width:windowWidth*0.1,
        borderStyle: "solid",
        borderColor:"#ffffff",
        borderWidth: 1.5,
        borderRadius:39,
        alignItems:"center",
        justifyContent:"center"

    },
    inputBox:{
        position: "absolute",
        height:windowHeight*0.05,
        width:windowWidth*0.5,
        fontFamily: "Roboto",
        fontSize: 18,
        color:"#000000",
        backgroundColor:"#ffffff",
        borderRadius:39,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"
        
    },
    button:{
        position: "absolute",
        height:windowHeight*0.05,
        width:windowWidth*0.5,
        top: 615,
        fontFamily: "Roboto",
        fontSize: 18,
        color:"#000000",
        backgroundColor:"#ffffff",
        borderRadius:39,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"

    },
    continueText:{
        position: "absolute",
        fontFamily: "Roboto",
        textAlign:"center",
        fontSize: 18,
        lineHeight: 21,
        alignItems: 'center',
        justifyContent:"center",
        alignContent:"center",
        textAlign: "center",
        color: '#000000'

    },

})
export default SignInScreen;