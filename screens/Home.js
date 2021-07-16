import React from 'react'
import { View, Text, Button } from 'react-native'
import { clearAuth } from "../utils/token"

export default function Home({navigation}) {
    const Quit = () => {
        clearAuth().then((res) => {
            if(res) {
                navigation.navigate('Login')
            } else {
                Alert.alert('quit failed')
            }
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ flex: 0.1 }}>
                <Text>welcome chaos app.</Text>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row' }}>
                <View style={{ flex: 0.7 }}>
                    <Button title='quit' onPress={Quit} />
                </View>
            </View>
        </View>
    )
}
