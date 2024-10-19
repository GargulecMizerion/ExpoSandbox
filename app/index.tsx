import {View, Text, StyleSheet} from 'react-native';
import {Link} from "expo-router";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hejkaasdcvb</Text>
            <Link href={"/details"}>View Details</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
