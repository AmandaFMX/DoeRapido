import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Account from '../pages/Account';
import Profile from '../pages/Profile';
import Match from '../pages/Match';
import Adm from '../pages/Adm';
import Matches from '../pages/Adm';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
         <Stack.Screen
         name="Welcome"
         component={Welcome}
         options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Match"
        component={Match}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Adm"
        component={Adm}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Matches"
        component={Matches}
        options={{ headerShown: false }}
        />
        </Stack.Navigator>
        
    )
}

