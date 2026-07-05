import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}