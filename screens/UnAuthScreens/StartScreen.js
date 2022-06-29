import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const StartScreen = () => {

  const SignIn = () => {
  
  }

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput/>
      <Button icon="camera" mode="contained" onPress={() => SignIn()}>Login in</Button>
    </View>
  )
}

export default StartScreen