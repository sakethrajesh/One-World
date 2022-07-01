import { View, Text } from 'react-native'
import React from 'react'
import UnAuthStack from './navigation/unauthenticated/UnAuthStack'
import TabNav from './navigation/signedIn/TabNav'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useAuthentication } from './utils/hooks/useAuthentication'
import './config/firebase';


const StartApp = () => {
    const { user } = useAuthentication();
    return (
        <>
        {(user) 
            ? <TabNav /> 
            : <UnAuthStack />
        }
        </>
    )
}

export default StartApp