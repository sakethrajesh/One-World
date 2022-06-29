import { View, Text } from 'react-native'
import React from 'react'
import AccountScreen from '../../../screens/AccountStackScreens/AccountScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>

      </Stack.Group>
    </Stack.Navigator>
  )
}

export default AccountStack