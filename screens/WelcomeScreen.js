import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor : "#7B71F9"}}>
      <StatusBar backgroundColor={"#7B71F9"}/>
      <View className="flex-1 flex justify-around my-8">

        <Text className="text-white font-bold text-4xl text-center">
          Let’s Get Started!
        </Text>

        <View className="flex-row justify-center">
          <Image
            source={require("../Assets/Image/welcome.webp")}
            style={{width:350 , height :350}}
          />
        </View>

        <View className="space-y-4">
          <TouchableOpacity className="py-3 bg-yellow-400 mx-7 rounded-xl">
            <Text className="text-xl font-bold text-center taxt-gray-700" onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">Already Have An Account? </Text>

            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
              <Text className="font-semi-bold text-yellow-400 ">Log In</Text>              
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </SafeAreaView>
  )
}