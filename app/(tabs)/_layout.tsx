import {Stack} from "expo-router";

export default function RootLayout() {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: 'rgb(255,0,6)'
        }
    }}>
        <Stack.Screen name={"product"}></Stack.Screen>
    </Stack>


}