import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/FeedStackScreens/Feed';
import AccountScreen from '../screens/AccountStackScreens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default TabNav