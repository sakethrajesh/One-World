import { View, Text } from 'react-native'
import React from 'react'
import UnAuthStack from './navigation/unauthenticated/UnAuthStack'
import TabNav from './navigation/signedIn/TabNav'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const StartApp = () => {
    let userToken = null;
  return (
    <>
    {(userToken === null) 
        ? <UnAuthStack />
        : <TabNav />
    }
    </>
  )
}

export default StartApp