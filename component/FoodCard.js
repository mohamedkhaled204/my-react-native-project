import { View, Image ,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ShoppingBagIcon } from 'react-native-heroicons/solid'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function FoodCard({item , index}) {
    const navigation = useNavigation()
  return (
    <Animatable.View
    animation="slideInRight"
    duration={index*120}
    key={index}
     className="w-56 h-70 my-5 mr-6 p-3 py-6 rounded-3xl"
     style={{backgroundColor:'rgba(255,255,255,0.2)'}}>
        <View className="flex-row justify-center">
            <Image source={item.image} className="h-40 w-48" />
        </View>

        <View className="flex-1 px-3 py-2 space-y-2">
            <Text className="text-white text-xl font-medium tracking-wider">{item.name}</Text>
            <Text className="text-white">{item.ingredients}</Text>
        </View>
        <View className="flex-row justify-between items-center px-1">
            <Text className="text-yellow-400 text-2xl font-semibold">{item.price}</Text>
            <TouchableOpacity className="bg-white p-3 rounded-full"
            onPress={()=>navigation.navigate("FoodDetails", {...item})}>
                <ShoppingBagIcon size={25} color={"black"} />
            </TouchableOpacity>
        </View>

    </Animatable.View>
  )
}