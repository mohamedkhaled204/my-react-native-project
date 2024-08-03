import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, ArrowLeftOnRectangleIcon , MinusIcon, PlusIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function FoodDetailsScreen(props) {
    let item = props.route.params;
    const navigation = useNavigation()
  return (
    <View className="flex-1 bg-white">
        <Image source={require("../Assets/Image/background.jpg")} 
        className="h-96 w-full absolute" 
        style={{borderBottomRightRadius :50 ,borderBottomLeftRadius:50}}
        blurRadius={40}/>
        <SafeAreaView className="pt-3">
            <View className="flex-row justify-between mx-4 items-center">
                <TouchableOpacity  className="bg-white rounded-2xl p-3"
                onPress={()=>navigation.goBack()}>
                    <ChevronLeftIcon size={23} color={"black"} />
                    
                </TouchableOpacity>
            <View className="bg-white shadow-md rounded-2xl p-3 ">
            <ArrowLeftOnRectangleIcon  size={25} stroke={100} color={"black"} onPress={() => navigation.navigate('Welcome')} />
          </View>
            </View>
            <View className="flex justify-center items-center">
                <Image source={item.image} className="h-48 w-52" />
                <Text className="text-white text-3xl pt-4">{item.name}</Text>
            </View>
            <View className="flex-row justify-center items-center mt-14">
                <View className="flex-row justify-center items-center bg-gray-100 rounded-2xl space-x-3">
                    <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
                        <MinusIcon size={20} color={"black"} stroke={2} />
                    </TouchableOpacity>
                    <Text className="text-xl">1</Text>
                    <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
                        <PlusIcon size={20} color={"black"} stroke={2} />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex-row justify-between items-center mx-4 h-20 overflow-hidden">
                <Animatable.View
                    duration={180}
                    animation={"slideInDown"}
                    className="flex items-center space-y-2">
                    <Image source={require("../Assets/Image/calories.jpg")} className="h-6 w-6" />
                    <Text className="font-semibold">130 cal</Text>
                </Animatable.View>
                <Animatable.View
                    duration={280}
                    animation={"slideInDown"}
                    className="flex items-center space-y-2">
                    <Image source={require("../Assets/Image/clock.jpg")} className="h-6 w-6" />
                    <Text className="font-semibold">20-30 min</Text>
                </Animatable.View>
                <Animatable.View
                    duration={380}
                    animation={"slideInDown"}
                    className="flex items-center space-y-2">
                    <Image source={require("../Assets/Image/chat.jpg")} className="h-6 w-6" />
                    <Text className="font-semibold">4.6 vote</Text>
                </Animatable.View>
                <Animatable.View
                    duration={480}
                    animation={"slideInDown"}
                    className="flex items-center space-y-2">
                    <Image source={require("../Assets/Image/weight.jpg")} className="h-6 w-6" />
                    <Text className="font-semibold">350 g</Text>
                </Animatable.View>
            </View>

            <View className="mx-4 mt-6 space-y-2 h-48">
                <Animatable.Text
                duration={1000}
                animation={'slideInUp'}
                className="text-3xl font-semibold text-gray-800">
                    Description
                </Animatable.Text>
                <Animatable.Text
                duration={1000}
                animation={'slideInUp'}
                className="text-lg font-semibold text-gray-600 tracking-wider">
                    {item.desc}
                </Animatable.Text>
            </View>

            <View className="mx-4 flex-row justify-between items-center">
                <Animatable.Text
                animation={"slideInLeft"}
                duration={1000}
                className="text-yellow-600 text-semibold text-3xl">
                    {item.price}
                </Animatable.Text>

                <Animatable.View
                animation={"slideInRight"}
                duration={1000}>
                    <TouchableOpacity className="bg-gray-800 p-4 px-14 rounded-2xl">
                        <Text className="text-white text-xl font-semibold">Add To Cart</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

        </SafeAreaView>
        
    </View>
  )
}