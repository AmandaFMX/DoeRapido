import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
    KeyboardAvoidingView, 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity } from 'react-native';

import config from '../../../config/config';

export default function Adm({navigation})

{
    const [email, setEmail]=useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [response, setResponse] = useState(null);
    const [idUser, setIdUser] = useState(null);

    useEffect(()=>{
        async function getIdUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
     });
    
     async function sendForm()
     {
         let response=await fetch(config.urlRoot,'update',{
             method:'POST',
             headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
             body:JSON.stringify({
                 email: email,
                 senhaAntiga: senhaAntiga,
                 novaSenha: novaSenha,
                 confNovaSenha: confNovaSenha
             }),

         });
         let json=await response.text();
         setResponse(json);
     }
      
 return (

    <KeyboardAvoidingView>

    <View style={styles.container}></View><View style={styles.container}>
    <Text style={styles.title}>Alteração da Senha</Text>

        <Text style={styles.Text}>Email</Text>
        <TextInput style={styles.Input} placeholder='julie@example.com' onChangeText={text=>setEmail(text)} />
        <Text style={styles.Text}>Senha Antiga</Text>
        <TextInput style={styles.Input} placeholder='*******' onChangeText={text=>setSenhaAntiga(text)} secureTextEntry={true} />
        <Text style={styles.Text}>Nova Senha</Text>
        <TextInput style={styles.Input} placeholder='*******' onChangeText={text=>setNovaSenha(text)} secureTextEntry={true} />
        <Text style={styles.Text}>Confirmar Senha</Text>
        <TextInput style={styles.Input} placeholder='*******' onChangeText={text=>setConfNovaSenha(text)} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={()=>sendForm()}>
            <Text style={styles.buttonText}>Trocar</Text>
        </TouchableOpacity>
    </View>
</KeyboardAvoidingView>
);
}

const styles= StyleSheet.create({

containerForm:{
   paddingStart:'5%',
   paddingEnd:'5%',
},

msgText:(text='none')=>({
    fontWeight:'bold',
    fontSize:22,
    color:'red',
    marginBottom:15,
    paddingStart:'5%',
    paddingEnd:'5%',
    marginTop:'5%',
    display: text
}),
title:{
    fontFamily:'Roboto',
    fontSize:34,
    color:'#2c2f3f',
    fontStyle:'normal',
    fontWeight:'bold',
    lineHeight:51,
    width: 800,
    height: 51,
    left: 54,
    top: 45,
},

Text:{
    width: 180,
    height: 20,
    left: 27.05,
    color:'#A6ABB0',
    marginLeft:20,
    top:68,
    zIndex: -50,   
},
   

Input:{
    
    width: 295,
    height: 58,
    padding: 15,
    color:'#D3D0D0',
    marginBottom:20,
    borderWidth: 1,
    borderColor:'#E8E6EA',
    borderRadius: 15,
    top:60,
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
    top:600,
    left:85,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:9
},
buttonText:{

    color:'#fff',
    alignItems:'center',

},
})