import React, {useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
 } from 'react-native';

  import * as Animatable from 'react-native-animatable';

  import AsyncStorage from '@react-native-async-storage/async-storage';
 
  import {useNavigation} from '@react-navigation/native';

  export default function Matches({navigation}) {

    const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.email);
        }
        getUser();
    },[]);
    return (
      
      <KeyboardAvoidingView>

       <View style={styles.containerLogo}>
       
    </View>
       <Animatable.View animation='fadeInUp' style={styles.containerForm}> 
      <View>
      <Text style={styles.title}>Matches</Text>
      <Text style={styles.textMoc}>Não encontramos nenhum perfil compatível com o seu.</Text>
      <Text style={styles.text}>Esta é uma lista de famílias e ONGs que atendem suas necessidades ou preferências.</Text>
</View> 
</Animatable.View>
</KeyboardAvoidingView>
    );
  }


  const styles= StyleSheet.create({

    containerForm:{
      paddingStart:'5%',
      paddingEnd:'5%',
    },

    title:{
      fontFamily:'Roboto',
      fontSize:34,
      color:'#000',
      fontStyle:'normal',
      fontWeight:'bold',
      paddingStart:'5%',
      lineHeight:38,
      MarginTop:'5%',
      marginBottom:'8%',
      position:'absolute',
      width: 295,
      height: 72,
      left: 0,
      top: 60,
      padding:5
  },
  text:{
    fontFamily:'Roboto',
    fontSize:14,
    top:50,
    left: 10,
    Margin:5
}, 

textMoc:{
  fontFamily:'Roboto',
  fontSize:14,
  width:400,
  textAlign:'left',
  justifyContent:'center',
  lineHeight:21,
  color:'#323755',
  MarginTop:10,
  marginBottom:12,
  paddingHorizontal:60,
  top:400,
  Margin:5
},  
   

Input:{
    
    width: 300,
    height: 58,
    padding: 15,
    color:'#D3D0D0',
    marginBottom:20,
    borderWidth: 1,
    borderColor:'#E8E6EA',
    borderRadius: 15,
    top:200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:30,
    zIndex: -90,
   
    
},
button:{
        
  position:'absolute',
  backgroundColor:'#EEB738',
  borderRadius:15,
  width: 231,
  height: 45,
  top:580,
  left:83,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:9
},
buttonText:{

  color:'#fff',
  alignItems:'center',

},
})
  