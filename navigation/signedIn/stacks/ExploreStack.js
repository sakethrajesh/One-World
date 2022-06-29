import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '../../../screens/ExploreStackScreens/Explore';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>

      </Stack.Group>
    </Stack.Navigator>
  )
}

export default ExploreStack