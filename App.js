import 'react-native-gesture-handler';
import React from 'react';
import Main from './components/MainComponent';
import DetailsPage from './components/DetailsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{title: 'Welcome to Guitarganizer!'}}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsPage}
                    options={{title: 'Guitar Details'}}
                    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}