import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import bottomtab from "./screens/bottomtab";
 
export default function App() { 

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="bottomtab" component={bottomtab} 
        options={{
          title: "Login",
          headerShown: false
        }}
        />
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: "Home",
          headerShown: false
        }}
        />
      </Stack.Navigator>
    ); 
  } 
 
  return ( 
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    );
} 
