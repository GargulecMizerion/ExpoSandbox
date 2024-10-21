import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Link} from '@react-navigation/native';
import Product from "@/app/(tabs)/product";

export default function ExploreScreen() {
    return <View style={styles.container}>
        <Text>Hej Explore</Text>
        <Link to={"/product"}> View Product </Link>
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