import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Link} from '@react-navigation/native';
import Product from "@/app/(tabs)/product";
import {Products} from "@/app/(data)/data";


export default function ExploreScreen() {
    return <View style={styles.container}>
        <Text>Hej Explore</Text>
        {/* Pętla mapująca produkty */}
        {Products.map(product => (
            <View key={product.id} style={{marginVertical: 10}}>
                {/* Przekazujemy produkt w stanie Link */}
                <Link to={`/${product.id}`}>
                    <Text>{product.name}</Text>
                </Link>
            </View>
        ))}

        <Link to={"/product"}>View Explore</Link>
        {/*nie dodaje (tabs) bo to tak na prawdę nie jest folder i to sluzy tylko do kategoryzowania ebebebe...*/}
    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})