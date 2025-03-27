import { Image, Text, View } from "react-native";

const src: Record<string, any> = {
    vegetable: require("@/assets/images/vegetable-logo.png"),
};

type CategoryPropsType = {
    title?: string;
    imgName?: string,
    imageMap?: Record<string, number>;
};

export default function Category({ title = "vegetable", imgName = "vegetable", imageMap = src }: CategoryPropsType) {
    const imageSource = imageMap[imgName] || imageMap["vegetable"];
    return (
        <>
            <View className="m-2">
                <View className="bg-[#baf2d7] rounded-2xl">
                    <Image source={imageSource} className="w-24 h-24" />
                </View>
                <Text className="capitalize text-center mt-1 text-base">{title}</Text>
            </View>
        </>
    );
};