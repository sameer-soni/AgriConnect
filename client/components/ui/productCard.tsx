import { Image, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ProductCard({ name = "orange", rate = 4.99, perkg = 4.55 }) {
    return (
        <>
            <View className="relative m-2">
                <Image source={require("@/assets/images/orange-with-bg.png")} className="w-48 h-64 rounded-2xl" />
                <View className="absolute top-36 left-5 bottom-0 right-0 flex-row justify-between">
                    <View className="top-1">
                        <Text className="text-2xl font-base capitalize">{name}</Text>
                        <Text className="text-lg text-gray-600">${perkg}/kg</Text>
                        <Text className="text-xl font-medium mt-2">${rate}</Text>
                    </View>
                    <View className="top-11">
                        <MaterialIcons name="add-shopping-cart" size={30} color="white" className="bg-[#ffa408] p-4 rounded-tl-2xl rounded-br-xl" />
                    </View>
                </View>
            </View>
        </>
    );
};