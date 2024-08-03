import { View, Text, TouchableOpacity, Image, TextInput , StatusBar} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'


export default function LoginScreen() {
const navigation = useNavigation()

  return (
    <View className="flex-1" style={{backgroundColor : "#7B71F9"}}>
        <StatusBar backgroundColor={"#7B71F9"}/>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=>navigation.goBack()} 
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl m-4">
             <ArrowLeftIcon size={20} color={"black"} />
              
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image
           source={require('../Assets/Image/signup.jpg')}
           style={{ width:200 , height:200 }} />

        </View>

      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
      style={{borderTopLeftRadius : 50 , borderTopRightRadius :50}} >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Username</Text>
          <TextInput
          placeholder='Enter Username'
          className="p-4 bg-gray-100 text-gray-700 rounded-2xl " />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
          placeholder='Enter Email'
          className="p-4 bg-gray-100 text-gray-700 rounded-2xl " />

          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
          placeholder='Enter Password'
          className="p-4 bg-gray-100 text-gray-700 rounded-2xl " />


          <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="py-3 bg-yellow-400 rounded-xl">
            <Text className="font-xl font-blod text-center text-gray-700">
              Sign Up</Text>

          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
        Or</Text>

        <View className="flex-row justify-center space-x-12">

          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl"
          onPress={() => navigation.navigate('Home')}>
            <Image source={require("../Assets/Image/google.jpg")}
            className="w-10 h-10"/>
          </TouchableOpacity>

          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl"
          onPress={() => navigation.navigate('Home')}>
            <Image source={require("../Assets/Image/apple.jpg")}
            className="w-10 h-10"/>
          </TouchableOpacity>

          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl"
          onPress={() => navigation.navigate('Home')}>
            <Image source={require("../Assets/Image/facebook.jpg")}
            className="w-10 h-10"/>
          </TouchableOpacity>
          
        </View>
      </View>
      
    </View>
  )
}