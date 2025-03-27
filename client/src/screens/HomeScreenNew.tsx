import { View, SafeAreaView, Text, TextInput, Pressable, ScrollView } from "react-native";
import ShopByCategory from "@/components/ui/shopByCategory";
import HomeNav from "@/components/ui/homeNav";
import AllProducts from "@/components/ui/allProducts";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import AllTopOffers from "@/components/ui/allTopOffers";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeScreenNew() {
    return (
        <>
            {/* Root Wrapper */}
            <SafeAreaView className="p-6 pt-2 pb-24 flex-1 bg-white">
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Location and profile wrapper */}
                    <View className="flex-row justify-between mb-4">
                        <View>
                            <View className="flex-row">
                                <FontAwesome name="location-arrow" size={24} color="#56daa3" />
                                <Text className="text-2xl ml-2 font-medium">Delivery</Text>
                            </View>
                            <View>
                                <Text className="text-lg text-gray-600">#622 Bacagon, Chandigarh</Text>
                            </View>
                        </View>
                        <View className="justify-center">
                            <FontAwesome name="user-circle" size={30} color="#5cdf9e" />
                        </View>
                    </View>
                    {/* Search bar wrapper */}
                    <View className="flex-row my-4">
                        <View className="bg-gray-100 p-2 rounded-xl flex-1 flex-row items-center">
                            <Pressable>
                                <Fontisto name="search" size={24} color="black" className="mx-2" />
                            </Pressable>
                            <TextInput
                                placeholder="Search Grocery"
                                className="p-2 text-black text-lg"
                            />
                        </View>
                        <View className="bg-[#e2f7f0] rounded-lg ml-4 p-2 px-4 justify-center">
                            <Pressable>
                                <FontAwesome6 name="sliders" size={24} color="#56daa3" />
                            </Pressable>
                        </View>
                    </View>
                    {/* Shop by category wrapper */}
                    <View className="my-2">
                        <Text className="text-2xl capitalize font-medium">Shop by category</Text>
                        <View className="mt-4">
                            <View>
                                <ShopByCategory />
                            </View>
                        </View>
                    </View>
                    {/* Top deal & offers wrapper */}
                    <View className="my-4 mx-2">
                        <AllTopOffers />
                    </View>
                    {/* Top selling wrapper */}
                    <View className="my-4">
                        <View className="flex-row justify-between">
                            <Text className="capitalize text-xl font-medium">Top selling</Text>
                            <Pressable>
                                <Text className="capitalize text-lg font-medium">See all</Text>
                            </Pressable>
                        </View>
                        <View className="mt-5">
                            <AllProducts />
                        </View>
                    </View>
                </ScrollView>
                {/* Nav wrapper */}
                <View className="absolute bottom-6 left-6">
                    <HomeNav />
                </View>
            </SafeAreaView>
        </>
    );
};