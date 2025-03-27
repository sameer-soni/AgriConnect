import { Image, Pressable, Text, View } from "react-native";

export default function TopOffers() {
    return (
        <>
            <View className="p-5 bg-orange-100 rounded-3xl flex-row">
                <View className="w-1/2">
                    <Text className="capitalize text-xl text-blue-800 font-medium">Top deal!</Text>
                    <Text className="capitalize text-2xl text-blue-900 font-semibold my-2">
                        Fresh avocado upto 15% off
                    </Text>
                    <Pressable>
                        <Text className="capitalize text-white bg-blue-900 px-4 py-2 my-4 rounded-full text-center w-36 font-medium">Shop now</Text>
                    </Pressable>
                </View>
                <View className="w-1/2 justify-center items-center">
                    <Image source={require("@/assets/images/avocado-image.png")} className="w-48 h-28" />
                </View>
            </View>
        </>
    );
};