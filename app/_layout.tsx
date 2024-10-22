import {Stack} from "expo-router";

export default function RootLayout() {// Tworzy layout ekranu dla komponentow znajdujacych sie w tym samym folderze
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4555e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="index" options={{headerShown: false,}}/>
            <Stack.Screen name="details"/>
            <Stack.Screen name="(tabs)" options={{headerShown: false,}}/>
            <Stack.Screen name="(details)" options={{headerShown: false,}}/>
        </Stack>
    );
}
