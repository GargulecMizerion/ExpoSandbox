import { str } from "ajv";
import { string } from "prop-types";
import React from "react";
import { Text, View } from "react-native";

type ProductProps = {
  id: number;
  name: string;
};

export default function Product(props: ProductProps) {
  return (
    <View>
      <Text>{props.id}</Text>
      <Text>{props.name}</Text>
    </View>
  );
}
