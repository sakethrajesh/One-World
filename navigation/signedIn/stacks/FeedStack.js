import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../../screens/FeedStackScreens/Feed';

const Stack = createNativeStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>

      </Stack.Group>
    </Stack.Navigator>
  )
}

export default FeedStack