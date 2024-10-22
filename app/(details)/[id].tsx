import {Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Products} from "@/app/(data)/data";
import {useLocalSearchParams} from "expo-router";


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
            {product ? (<Text>{product.name}</Text>) : <Text>Produkt o podanym id nie istnieje</Text>}

        </View>
    );
}

