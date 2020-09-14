import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,FlatList,TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import LeftArrow from './img/leftArrow'
import Person from './img/person'


const AddCustomer=({navigation})=>{
    const [selectedId, setSelectedId] = useState(null);
    var temp3=[]
    var temp1=[]
    var temp2={}
    const [temp5,setTemp5]=useState([])
    
    var [CustomerOrder,setCustomerOrder]=useState([
        {   id:0,
            qty:1,
            Ordername: 'Cheese Burger', 
            amount: 20 ,
            checked:false,
            disable:false
       
        },
        {   id:1,
            qty:1,
            Ordername: 'Peri Peri Fries', 
            amount: 10 ,
            checked:false,
            disable:false
    
        },
        {   id:2,
            qty:3,
            Ordername: 'Medium Coke', 
            amount: 10,
            checked:false,
            disable:false
        },
        {   id:3,
            qty:1,
            Ordername: 'Chocolate ice-creame', 
            amount:10,
            checked:false,
            disable:false
        },
        {   id:4,
            qty:1,
            Ordername: 'ice-creame', 
            amount: 10,
            checked:false,
            disable:false
        },
    ])
    const [data, setData] = React.useState({
    name: '',
    
    });
    const [text, setText] = useState('')
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(0)



    const textInputChange = (val) => {       
        setData({
            ...data,
            name: val,

        });
        setText(val)

        
    }
    const onCheckPress=(index)=>{
        [...CustomerOrder]
        var temp=[...CustomerOrder]
        temp[index].checked= !temp[index].checked
        setCustomerOrder(temp)
     }

     const handleAddCustomer=()=>{
        
        [...CustomerOrder],[...temp3]
        
        var temp=[...CustomerOrder]
        CustomerOrder.map((d,index)=>{
            if(CustomerOrder[index].disable==true)
            { }
            else{
            temp[index].checked==true?temp[index].disable=true:null
            temp[index].checked==true?temp1.push(temp[index]):null
            temp[index].checked==true?setCount(0):setCount(count+1)
           
            
            
            }
        })
            
        if(count!=0){
            temp2.personName=data.name;
            temp2.id=count1
            temp2.OrderDetails=temp1
            const obj={personName:data.name,id:count1,OrderDetails:temp1}
            const tempObj=temp5
            setTemp5([...tempObj,obj])
            temp3.push(tempObj)
            console.log(temp5)
            setCount1(count1+1)
            onSubmit(text)

            
        }


        else{
            let tempCount=0;
            setCount(0)
            temp5.map((d,index1)=>{
                d.OrderDetails.map((e,index)=>{
                    tempCount=tempCount+e.amount
                
                })
                
            })
            navigation.navigate('Split',{abc:temp5,count1:count1,totalAmount:tempCount})
        }
                
        }
        function onSubmit(text){
            setText('')
        }
    

     let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
        "Inter-SemiBoldItalic":
          "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
      });
    
    
      if (!fontsLoaded) {
        return <AppLoading />;
    }
    const renderItem = ({ item}) => {
        
        
        return (
            <View style={{flexDirection:"row",borderBottomWidth:2,borderBottomColor:'#a9a9a9',top:0.03*windowHeight,marginBottom:windowHeight*0.02,}}>
                <CheckBox
                    value={item.checked}
                    onValueChange={()=>onCheckPress(item.id)}

                
                />
                <View style={styles.orderContainer}>
                <Text style={styles.orderText}>{item.qty}</Text>
                <Text style={styles.orderText}>{item.Ordername}</Text>
                <Text style={styles.orderText} color={"#458596"}>${item.amount}</Text>
                </View>
                
            </View>
        );
    };

    return(

        <View style={{flex:1}}>
            <View style={styles.TitleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Server')}>
                    <LeftArrow style={{left:windowWidth*0.01}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Add Customer</Text>
            </View>

           <View style={styles.nameContainer}>
               <Person left={windowWidth*0.1}/>
               <Text style={styles.nameText}>Name</Text>
           </View>

           <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} onChangeText={(val) => textInputChange(val)} value={text}/>
           </View>

           <Text style={styles.textContainer}>Select the list of items to the list of customer</Text>

           <View style={styles.titleText}>
                    <Text style={styles.titleTextContainer}>Qty</Text>
                    <Text style={styles.titleTextContainer}>Item</Text>
                    <Text style={styles.titleTextContainer}>Amount</Text>       
            </View>

            <FlatList
                data={CustomerOrder}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />

           <View style={{height:windowHeight*0.16,backgroundColor:'#f9eae4',borderTopLeftRadius:20,borderTopRightRadius:40,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:1}}>
            <TouchableOpacity style={styles.billText}  onPress={handleAddCustomer}>
                <Text style={{fontFamily:"Poppins-Light",color:"#ffffff",fontSize:22,}}>Bill This</Text>
            </TouchableOpacity>
            <View>{temp5.map(e=><Text>{e.personName}</Text>)}</View>

            </View>

                

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
    nameContainer:{
        flexDirection:"row",
        marginTop:windowHeight*0.13
    },
    nameText:{
        fontFamily:"Poppins-Light",
        color:"#666161",
        fontSize:16,
        marginTop:5,
        left:windowWidth*0.15

    },
    inputContainer:{
        borderBottomWidth:2,
        fontSize:16,
        marginTop:10,
        marginHorizontal:windowWidth*0.1,
        borderColor:"#c4c4c4"
    },
    
    textInput:{
        fontFamily:"Poppins-Light",
        color:"#666161",
        fontSize:16,
        marginHorizontal:windowWidth*0.02,        
    },
    textContainer:{
        textAlign:"center",
        marginTop:10,
        fontFamily:"Poppins-Light",
        color:"#ff264d",
        fontSize:14,
               
    },
    titleText:{
        fontSize:16,
        marginTop:20,
        justifyContent:"space-between",
        marginHorizontal:windowWidth*0.08,
        flexDirection:"row" ,
        left:windowWidth*0.025
    },
    titleTextContainer:{
        fontFamily:"Poppins-Light",
        color:"#ff264d",
        fontSize:14,
        marginBottom:5,
        alignItems:"center",
        justifyContent:"center"

    },
    orderContainer:{
        flex:1,
        fontSize:16,
        justifyContent:"space-between",
        marginHorizontal:windowWidth*0.05,
        flexDirection:"row" 
    },
    orderText:{
        fontFamily:"Poppins-Light",
        color:"#666161",
        fontSize:14,
        marginBottom:5,
        alignItems:"center",
        justifyContent:"center"

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