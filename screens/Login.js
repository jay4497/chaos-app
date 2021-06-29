import  React, { useState, useEffect } from 'react'
import { View, KeyboardAvoidingView, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { setAuth } from "../utils/token"

function UserIcon() {
    return (
        <Ionicons name='at-sharp' style={styles.inputicon}/>
    )
}

function PasswordIcon() {
    return (
        <Ionicons name='ios-lock-closed-outline' style={styles.inputicon} />
    )
}

export default function Login({navigation}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function submit() {
        let body = new FormData()
        body.append('user', username)
        body.append('pass', password)

        setAuth('tokensjldkjfaljsd').then((res) => {
            if(res === null) {
                Alert.alert('failed')
            } else {
                navigation.navigate('HomeTab')
            }
        })
    }

    function focus(e) {
        e.target.setNativeProps({ borderColor: 'blue'})
    }

    function blur(e) {
        e.target.setNativeProps({ borderColor: '#666'})
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'space-between'}}>
            <View style={{ flex: 0.3}}></View>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <UserIcon/>
                    <TextInput textContentType='username' placeholder='Username' style={styles.input} onChangeText={setUsername} onFocus={focus} onBlur={blur} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <PasswordIcon/>
                    <TextInput textContentType='password' secureTextEntry={true} placeholder='Password' style={styles.input} onChangeText={setPassword} onFocus={focus} onBlur={blur} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 12 }}>
                    <View style={{ flex: 0.7 }}>
                        <Button title='登录' onPress={submit} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.2 }}></View>
            <View style={{ flex: 0.1, alignItems: 'center' }}>
                <Text style={{ color: '#999' }}>chaos-jay4497</Text>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    input: {
        flex: 0.7,
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 5,
        paddingRight: 12,
        paddingLeft: 12,
        marginTop: 12,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        lineHeight: 40,
        height: 40,
    },
    inputicon: {
        marginTop: 12,
        paddingLeft: 12,
        height: 40,
        lineHeight:40,
        borderWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        fontSize: 24,
        color: '#999999'
    }
})
