import  React, { useState } from 'react'
import { View, KeyboardAvoidingView, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import login from '../utils/request'

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
            username: this.state.username,
            password: this.state.password
        }
        login(body).then((res) => {
            return res.json()
        }).then((data) => {
            if(data.status === 0) {
                navigation.navigate('Home')
            } else {
                Alert.alert('failed')
            }
        })
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center'}}>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <UserIcon/>
                    <TextInput inlineImageLeft='' textContentType='username' placeholder='Username' style={styles.input} onChange={setUsername} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <PasswordIcon/>
                    <TextInput textContentType='password' placeholder='Password' style={styles.input} onChange={setPassword}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 12 }}>
                    <View style={{ flex: 0.7 }}>
                        <Button title='登录' onPress={submit} />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    input: {
        flex: 0.7,
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
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        fontSize: 24,
        color: '#999999'
    }
})
