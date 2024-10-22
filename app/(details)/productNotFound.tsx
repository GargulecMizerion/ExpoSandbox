import {string} from "prop-types";
import id from "ajv/lib/vocabularies/core/id";
import {Text} from "react-native";


export default function ProductNotFound({id}: { id: string }) {
    return <Text>{`Nie znaleziono produktu z id ${id}`}</Text>
}