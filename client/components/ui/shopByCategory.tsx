import { ScrollView } from "react-native";
import Category from "./category";

export default function ShopByCategory() {
    return (
        <>
            <ScrollView
                className="flex-row"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {/* <Category title="fruit" imgName="logo" imageMap={{ logo: require("@/assets/images/icon.png") }} /> */}
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </ScrollView>
        </>
    );
};