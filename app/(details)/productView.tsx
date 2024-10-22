import {View, Text, StyleSheet} from "react-native";


const ProductView = ({product}: { product: any }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{product.name}</Text>

        <View style={styles.section}>
            <Text style={styles.paragraphTitle}>Opis:</Text>
            <Text style={styles.paragraph}>{product.details}</Text>
        </View>

    </View>
}

export default ProductView;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    section: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        backgroundColor: '#8ec4e0',
    },
    paragraphTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    paragraph: {
        fontSize: 18,
    }

})