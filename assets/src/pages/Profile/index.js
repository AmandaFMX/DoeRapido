import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image
    } from 'react-native';
  
import * as Animatable from 'react-native-animatable';

import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';
 
  export default function Profile({navigation}) {

    const [avatar,setAvatar]=useState();

     async function imagePickerCall(){

     const data= await ImagePicker.launchImageLibraryAsync({

      mediaTypes:ImagePicker.MediaTypeOptions.Images
     });

     

     if (data.cancelled){
      return;
     }
     if (!data.uri){
      return;
     }
     setAvatar(data);
    }
    
    async function uploadImage() {
        const data = new FormData();

        data.append('avatar', {
          uri: avatar.uri,
          type: avatar.type,
        });

        await Axios.post('http://localhost:3333/files', data);
}     
    return (
      
      <KeyboardAvoidingView>

       <View style={styles.containerLogo}>
    </View>
       <Animatable.View animation='fadeInUp' style={styles.containerForm}> 
      <View>
      <Text style={styles.title}>Profile details</Text>
      <Image
        source={{uri:avatar
          ? avatar.uri
          :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxzbq35TsPdqW-68xRNMFY8DRlG-58l7xp7V9lpxS_XbFofpl-I--VoxmVOegPFGcmUI&usqp=CAU'
        }}
        style={styles.avatar}
        />
      <TouchableOpacity 
            style={styles.buttonFoto}
            onPress={imagePickerCall}>
            <Text style={styles.buttonTextFoto}>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            style={styles.buttonSalvarImage}
            onPress={uploadImage}>
            <Text style={styles.buttonText}>Salvar photo</Text>
      </TouchableOpacity>
      <Text style={styles.Text}>Apelido</Text>
      <TextInput
                placeholder="JULINHA"
                style={styles.Input}/>
      <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Welcome')}>
            <Text style={styles.buttonText}>Aplicar</Text>   
      </TouchableOpacity>
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
      MarginTop:'30%',
      marginBottom:'8%',
      position:'absolute',
      width: 295,
      height: 72,
      left: 52,
      top: 152,
  },
  Text:{

    width: 60,
    height: 20,
    left: 27.05,
    color:'#A6ABB0',
    marginLeft:20,
    top:208,
    zIndex: -50,   
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
  top:650,
  left:83,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:9
},
buttonSalvarImage:{

  position:'absolute',
  backgroundColor:'#EEB738',
  borderRadius:15,
  width: 100,
  height: 45,
  top:390,
  left:146,
  alignItems: 'center',
  justifyContent: 'center',
 
},
buttonFoto:{
     
  position:'absolute',
  backgroundColor:'#EEB738',
  borderRadius:15,
  width: 34,
  height: 34,
  top:345,
  left:225,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:9
},
buttonText:{

  color:'#fff',
  alignItems:'center',

},
buttonTextFoto:{

  color:'#fff',
  alignItems:'center',
  fontSize:10,
},
avatar:{

  width: 125,
  height: 125,
  top:190,
  alignItems: 'center',
  justifyContent: 'center',
  margin:50,
  left:80,
  borderRadius:25
},
})
  