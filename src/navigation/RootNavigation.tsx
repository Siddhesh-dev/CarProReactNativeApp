import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../login/loginscreen";
import CP_Routes from "./Routes";
import DashboardScreen from "../Dashboard/dashboardscreen";
import CP_Color from "../styles/CP_Color";

const Stack = createNativeStackNavigator();


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={CP_Routes.LOGIN}>
                <Stack.Screen
                    name={CP_Routes.LOGIN}
                    component={LoginScreen}
                    options={{
                        title:"VWFS-CarPro",
                        headerTintColor: CP_Color.tableHeaderColor,
                        headerShown:false
                    }}
                />
                 <Stack.Screen
                    name={CP_Routes.DASHBOARD}
                    component={DashboardScreen}
                    options={{
                        title:"Dashboard"
                    }}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation