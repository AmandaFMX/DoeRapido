import react from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';

 import * as Animatable from 'react-native-animatable';

 
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
    const navigation=useNavigation();

    return (
        <View style={styles.container}> 

        <View style={styles.containerLogo}>
        <Image
        source={require('C:/Users/amanda.xavier/DoeRapido/DoeRapido/assets/img/CriancaFome.png')}
        style={{ width: '100%' }}
        resizeMode="contain"
        />
    </View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}> 
            <Text style={styles.title}>DOE RÁPIDO</Text>
            <Text style={styles.text}>Nós encontramos pra você, pessoas que precisam da sua ajuda.</Text>
            
            <TouchableOpacity
            style={styles.button}
            onPress={() =>navigation.navigate('Signin')}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() =>navigation.navigate('Account')}
            >
            <Text style={styles.RegisterText}>Registre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonEsqueceu}
            onPress={() =>navigation.navigate('Adm')}
            >
            <Text style={styles.EsqueceuText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>


           </Animatable.View>
            </View>

            

        );
}

const styles= StyleSheet.create({
container:{
    flex:1,
   backgroundColor:'#fff',     
},
    containerLogo:{
        flex:2,
        borderColor:'#000000',
        borderRadius: 15,
        shadowColor:'#000000',

    },

    containerForm:{
        flex:2,
        backgroundColor:'#fff',
        paddingStart:'5%',
        paddingEnd:'5%',
        

},
title:{
    fontFamily:'Roboto',
    fontSize:24,
    color:'#D7991E',
    fontStyle:'normal',
    fontWeight:'bold',
    textAlign:'center',
    lineHeight:38,
    MarginTop:28,
    marginBottom:24,
   
},
text:{
    fontFamily:'Roboto',
    fontSize:14,
    width:400,
    textAlign:'center',
    justifyContent:'center',
    lineHeight:21,
    color:'#323755',
    MarginTop:28,
    marginBottom:12,
    paddingHorizontal:60,
},  
button:{
    
    position:'absolute',position:'absolute',
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'#EEB738',
    borderRadius:15,
    paddingVertical:8,
    bottom:'50%',
    alignItems:'center',
    width:231,
    height:45,
  
},
buttonText:{

    color:'#fff',
    alignItems:'center',

},

buttonRegister:{

    position:'absolute',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:15,
    paddingVertical:8,
    bottom:'30%',
    alignItems:'center',
    width:231,
    height:45,
    backgroundColor:'#FFF',

},

RegisterText:{

    color:'#D7991E',
    alignItems:'center',
    fontSize:16,
    fontWeight:'bold'
    
},

buttonEsqueceu:{

    position:'absolute',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:15,
    paddingVertical:8,
    bottom:'30%',
    alignItems:'center',
    width:231,
    height:50,
    top:300,
    backgroundColor:'#FFF',

},
EsqueceuText:{

    color:'#000',
    alignItems:'center',
    fontSize:16,
    fontWeight:'normal'
    
}
});