import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export function WelcomeScreen({ navigation: nav }) {
    const [countDown, setCountDown] = useState(10)


    useEffect(() => {
        const toid = setTimeout(() => {
            if (countDown > 0) {
                setCountDown(p => p - 1)
            } else {
                nav.navigate('Home')
            }
        }, 1000)
        return () => clearTimeout(toid)
    }, [countDown])

    return <View>
        <Text>Welcome screen</Text>
        <Text>Go to home in {countDown}</Text>
    </View>
}