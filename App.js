import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import FoodDetailsScreen from './screens/FoodDetailsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown :false}} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown :false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown :false}} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown :false}} />
            <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} options={{headerShown :false}} />
            
          </Stack.Navigator>
        </NavigationContainer>
    )
}