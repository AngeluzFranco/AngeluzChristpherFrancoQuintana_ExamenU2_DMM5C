
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";



import Home from "./Home";
import Perfil from "./Perfil";
import Search from "./Search";

import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (

        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={Home}
                options={{
                  headerShown: false, tabBarActiveTintColor: 'purple', tabBarInactiveTintColor: 'black',
                    tabBarIcon: () => (
                        <MaterialIcons name="home" size={35} color="black" />
                    )

                }}
            />

            <Tab.Screen name="Search" component={Search}
                options={{
                  headerShown: false, tabBarActiveTintColor: 'purple', tabBarInactiveTintColor: 'black',
                    tabBarIcon: () => (
                        <MaterialIcons name="search" size={35} color="black" />
                    )

                }}
            />

            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                 headerShown: false, tabBarActiveTintColor: 'purple', tabBarInactiveTintColor: 'black', 
                    tabBarIcon: () => (
                        <FontAwesome5 name="user-ninja" size={35} color="black" />
                    )

                }}

            />

        </Tab.Navigator>

    )
}
export default BottomNav;


