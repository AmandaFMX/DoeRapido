import React, {useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
  import Adm from '../../../src/pages/Adm/index';
  import Account from '../../../src/pages/Account/index';
  import Profile from '../../../src/pages/Profile/index';
  import Matches from '../../../src/pages/Matches/index';
  import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
  import Icon from 'react-native-vector-icons/FontAwesome';

  import AsyncStorage from '@react-native-async-storage/async-storage';

  import {useNavigation} from '@react-navigation/native';

  export default function Match({navigation}) {

    const Tab = createMaterialBottomTabNavigator();
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
      <Tab.Navigator
                activeColor='#EEB738'
                inactiveColor='#fff'
        >
             <Tab.Screen
                  name="Matches"
                  component={Matches}
                  options={{
                  tabBarIcon:()=>(
                        <Icon name="heart" size={20} color="#999" />
                  )
               }}
            />
              <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Adm"
                    component={Adm}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="edit" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="user" size={20} color="#999" />
                    )
                }}
            />            

        </Tab.Navigator>
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
    top:210,
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
  