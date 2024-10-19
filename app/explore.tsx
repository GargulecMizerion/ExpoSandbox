import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function ExploreScreen() {
    return <View style={styles.container}>
        <Text>Hej Explore</Text>
    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})