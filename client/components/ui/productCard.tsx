import { Image, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ProductCard({ color = "orange", name = "orange", rate = 4.99, perkg = 4.55 }) {
    return (
        <>
            <View className={`bg-${color}-200 rounded-2xl m-2 w-48`}>
                <View className="items-center mt-4">
                    <Image source={require("@/assets/images/orange.png")} className="w-40 h-36" />
                </View>
                <View className="flex-row justify-between">
                    <View className="m-5 mr-0">
                        <Text className="text-3xl font-base capitalize">{name}</Text>
                        <Text className="text-xl text-gray-600">${perkg}/kg</Text>
                        <Text className="text-2xl font-medium mt-2">${rate}</Text>
                    </View>
                    <View className="justify-end">
                        <MaterialIcons name="add-shopping-cart" size={30} color="white" className="bg-orange-400 p-4 rounded-tl-2xl rounded-br-xl" />
                    </View>
                </View>
            </View>
        </>
    );
};