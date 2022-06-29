import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../../screens/UnAuthScreens/StartScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const UnAuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Start" component={StartScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>

            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default UnAuthStack