import { View } from "react-native";
import ProductCard from "./productCard";

export default function AllProducts() {
    return (
        <>
            <View className="flex-row flex-wrap">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </View>
        </>
    );
};