import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
    KeyboardAvoidingView, 
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity } from 'react-native';



export default function Signin({navigation})

{
    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

     
    //Envio do formulário de login
    async function sendForm()
    {
        let response=await fetch('http://192.168.10.7:3000/Signin',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Match');
        }
    }      
 return (

    <KeyboardAvoidingView>
         <View>
            <Text> {email} - {password}</Text>
         </View>
    <View>
        <Text style={styles.msgText(display)}>Usuário ou senha inválidos!</Text>
      </View>

    <View style={styles.container}></View><View style={styles.container}>
        <Text style={styles.title}>Logar-se com</Text>
        <Text style={styles.Text}>Email</Text>
        <TextInput style={styles.Input} placeholder='julie@example.com' onChangeText={text=>setEmail(text)} />
        <Text style={styles.Text}>Senha</Text>
        <TextInput style={styles.Input} placeholder='*******' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={()=>sendForm()}>
            <Text style={styles.buttonText}>Entrar</Text>
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
    width: 295,
    height: 51,
    left: 54,
    top: 181,
},

Text:{
    width: 50,
    height: 18,
    left: 27.05,
    color:'#A6ABB0',
    marginLeft:20,
    top:210,
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
    top:450,
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