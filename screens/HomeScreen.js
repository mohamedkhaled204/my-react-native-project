import { View, Text, Image, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { categories ,fooditems } from '../constant/data'
import * as Animatable from 'react-native-animatable';
import FoodCard from '../component/FoodCard'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()
  const [activecategory ,setactivecategory] = useState("Burger")
  return (
    <View className="flex-1 relative" style={{backgroundColor : "#7B71F9"}}>
      <StatusBar backgroundColor={"#7B71F9"}/>
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center mx-4 mt-3">
        <View className="rounded-2xl" style={{backgroundColor : "rgba(255,255,255,0.7)" , padding :3}}>
            <Image source={require("../Assets/Image/pic-1.jpg")} className="h-12 w-12 rounded-2xl" />
          </View>
          <TouchableOpacity className="bg-white shadow-md rounded-2xl p-3 ">
            <ArrowLeftOnRectangleIcon size={25} stroke={100} color={"black"} onPress={() => navigation.navigate('Welcome')} />
          </TouchableOpacity>
        </View>
        
        <View className="my-12 space-y-2 ">
          <Text className="mx-4 text-5xl font-medium text-gray-800">Fast And</Text>
          <Text className="mx-4 text-5xl font-medium text-gray-800">
            <Text className="font-extrabold text-yellow-400">Delicious</Text> Food
          </Text>
        </View>

        {/* search */}
        <View className="mx-4 flex-row justify-between items-center space-x-3">
          <View className="flex-row flex-1 bg-white rounded-2xl p-1 items-center">
            <MagnifyingGlassIcon stroke={40} color={"gray"}  />
            <TextInput className="ml-2 text-gray-800" placeholder='Food' />
          </View>
          <View className="bg-white rounded-2xl p-3">
            <AdjustmentsHorizontalIcon size={25} stroke={40} color={"gray"} />
          </View>
        </View>

        {/* scrollbar  */}
        <ScrollView className="pt-8 max-h-20" horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle ={{ paddingHorizontal :20}} >
          {
            categories.map((category ,index)=>{
              let isActive = category==activecategory;
              let textclass = isActive? "font-bold" : "";
              return(
              <Animatable.View
                animation="slideInDown"
                duration={index*120}
                key={index}
              >
                  <TouchableOpacity className="mr-9"
                      onPress={()=>setactivecategory(category)} >
                      <Text className={"text-white text-base tracking-widest" + textclass}>
                        {category}
                      </Text>
                      {
                        isActive?(
                          <View className="flex-row justify-center">
                            <Image className="flex-row justify-center w-5 h-1" 
                            source={require("../Assets/Image/line.png")} />

                          </View>
                        ):null
                      }
                  </TouchableOpacity>
                </Animatable.View>

              )
            })
          }
        </ScrollView>

        <ScrollView  contentContainerStyle={{paddingHorizontal:20}}
        horizontal showsHorizontalScrollIndicator={false}>
          {
            fooditems.map((item , index)=> <FoodCard item={item} index={index} key={index} /> )
          }

        </ScrollView>

      </SafeAreaView>
    </View>
  )
}