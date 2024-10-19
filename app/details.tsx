import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

export default function DetailsScreen() {
    return <View style={styles.container}>
        <Text style={styles.text}>
            Details
        </Text>
        <Link href={"/explore"}>View Explore</Link>
    </View>
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 58 // To nie działa
        },
        text: {
            fontSize: 58
        }


    }
)