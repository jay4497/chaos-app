import  React, { useState, useEffect } from 'react'
import { View, KeyboardAvoidingView, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { setAuth } from '../utils/token'
import { login } from "../api/auth"
import { toast } from "../utils/chaos"

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
        let body = {
            user: username,
            pass: password
        }
        login(body).then((result) => {
            if (result.data.status === 0) {
                setAuth(result.data.data).then((res) => {
                    if (res === null) {
                        toast('登录失败，请重试')
                    } else {
                        navigation.navigate('HomeTab')
                    }
                })
            } else {
                toast(result.data.message)
            }
        }).catch((e) => {
            toast('发生未知错误')
        })
        /**
        setAuth({
            userid: '123',
            access_token: 'jlajsjdlfjalsf',
            access_token_expire: '2021-07-31',
            refresh_token: 'lajsldjflajlsdjflajlskd'
        }).then((res) => {
            if(res === null) {
                ToastAndroid.show('failed', ToastAndroid.SHORT)
            } else {
                navigation.navigate('HomeTab')
            }
        })
        */
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
