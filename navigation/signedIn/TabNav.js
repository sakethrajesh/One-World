import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AccountScreen from '../../screens/AccountStackScreens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import FeedStack from './stacks/FeedStack';
import ExploreStack from './stacks/ExploreStack';
import AccountStack from './stacks/AccountStack';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedStack} options = {{headerShown: false}} />
            <Tab.Screen name="Explore" component={ExploreStack} options = {{headerShown: false}} />
            <Tab.Screen name="Account" component={AccountStack} options = {{headerShown: false}} />
        </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default TabNav