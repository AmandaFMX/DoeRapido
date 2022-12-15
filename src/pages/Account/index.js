import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    KeyboardAvoidingView, 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity } from 'react-native';

import config from '../../../config/config';

export default function Account({navigation})

{
    const [display, setDisplay]=useState('none');
    const [name, setName]=useState(null);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [response, setResponse] = useState(null);
    
         
    //Envio do formulário de login
    async function sendForm()
    {
        let response=await fetch(config.urlRoot+'create',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        });
        let json=await response.json();
        setResponse(json);
        navigation.navigate('Welcome');
} 
    return (

        <KeyboardAvoidingView>

        <View>
        <Text style={styles.msgText(display)}>Usuário cadastrado com Sucesso!</Text>
        </View>

       <View style={styles.container}>
            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.registerText}>Registre-se com</Text>

        <Text style={styles.Text}>Nome</Text>
        <TextInput style={styles.Input} placeholder='Julie Smith' onChangeText={text=>setName(text)} />
        <Text style={styles.Text}>Email</Text>
        <TextInput style={styles.Input} placeholder='julie@example.com' onChangeText={text=>setEmail(text)} />
        <Text style={styles.Text}>Senha</Text>
        <TextInput style={styles.Input} placeholder='*******' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={()=>sendForm()}>
            <Text style={styles.buttonText}>Registrar</Text>
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
<<<<<<< HEAD
        top: 80
=======
        top: 400
>>>>>>> da9703c4b7972425ef3b06302e6575d96978052f
    },

    registerText:{
        width: 295,
        height: 21,
        left: 27.05,
        color:'#2c2f3f',
        marginLeft:20,
<<<<<<< HEAD
        top:80,
=======
        top:203,
>>>>>>> da9703c4b7972425ef3b06302e6575d96978052f
        zIndex: -50,   
    },
       
    
    Text:{
        width: 50,
        height: 18,
        left: 27.05,
        color:'#A6ABB0',
        marginLeft:20,
<<<<<<< HEAD
        top:100,
=======
        top:210,
>>>>>>> da9703c4b7972425ef3b06302e6575d96978052f
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
<<<<<<< HEAD
        top:95,
=======
        top:200,
>>>>>>> da9703c4b7972425ef3b06302e6575d96978052f
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
<<<<<<< HEAD
        top:450,
=======
        top:580,
>>>>>>> da9703c4b7972425ef3b06302e6575d96978052f
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