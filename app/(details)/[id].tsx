import {Text, View, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";

import {Products} from "@/app/(data)/data";
import {useLocalSearchParams} from "expo-router";
import ProductNotFound from "@/app/(details)/productNotFound";
import ProductView from "@/app/(details)/productView";


export default function Product() {
    const [product, setProduct] = useState<Product | undefined | null>(null)
    const {id} = useLocalSearchParams()

    interface Product {
        id: number;
        name: string;
        details: string;
    }

    let data: Product | undefined | null = Products.find(product => id === product.id.toString());

    useEffect(() => {
        return setProduct(data);
    }, [])


    return (
        <View>
            {product ? (<ProductView product={product}/>) : <ProductNotFound id={id.toString()}/>}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
})

