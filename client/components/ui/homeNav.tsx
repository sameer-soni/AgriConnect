import { Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeNav() {
    return (
        <>
            <View className="w-full p-5 flex-row justify-between rounded-2xl bg-white" style={{ elevation: 10 }}>
                <View className="items-center">
                    <FontAwesome5 name="home" size={24} color="gray" />
                    <Text className="text-gray-500">Home</Text>
                </View>
                <View className="items-center">
                    <AntDesign name="tag" size={24} color="gray" />
                    <Text className="text-gray-500">Deals</Text>
                </View>
                <View className="items-center">
                    <Fontisto name="shopping-bag-1" size={24} color="gray" />
                    <Text className="text-gray-500">Orders</Text>
                </View>
                <View className="items-center">
                    <FontAwesome name="user" size={24} color="gray" />
                    <Text className="text-gray-500">Account</Text>
                </View>
            </View>
        </>
    );
};