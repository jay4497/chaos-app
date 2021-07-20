import React, { useState, useEffect } from 'react'
import { View, Button, TextInput, KeyboardAvoidingView } from 'react-native'
import { create } from '../api/kotoba'
import { toast } from '../utils/chaos'
import styles from './styles'

export default function Kotoba({route, navigation}) {
    const [content, setContent] = useState('')
    const [role, setRole] = useState('')
    const [author, setAuthor] = useState('')
    const [source, setSource] = useState('')

    useEffect(() => {
        try {
            let kotoba = route.params.item
            if (kotoba) {
                setContent(kotoba.content)
                setRole(kotoba.role)
                setAuthor(kotoba.author)
                setSource(kotoba.source)
            }
        } catch (e) {}
    })

    const submit = () => {
        let body = {
            content,
            role,
            author,
            source
        }
        create(body).then(res => {
            if(res.data.status === 0) {
                toast('保存成功')
                setContent('')
                setAuthor('')
                setRole('')
                setSource('')
                navigation.navigate('KotobaList')
            } else {
                toast(res.data.message)
            }
        }).catch((e) => {
            toast('发生未知错误')
        })
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center'}}>
            <View style={{ flex: 0.7 }}>
                <View style={ styles.inputcontrol }>
                    <TextInput style={styles.textarea} nativeID='content' placeholder='Content' multiline={true} numberOfLines={5} onChangeText={setContent} value={content} />
                </View>
                <View style={ styles.inputcontrol }>
                    <TextInput style={styles.input} placeholder='Source' onChangeText={setSource} value={source}/>
                </View>
                <View style={ styles.inputcontrol }>
                    <TextInput style={styles.input} placeholder='Role' onChangeText={setRole} value={role} />
                </View>
                <View style={ styles.inputcontrol }>
                    <TextInput style={styles.input} placeholder='Author' onChangeText={setAuthor} value={author} />
                </View>
                <View style={ styles.inputcontrol }>
                    <View style={{ flex: 1 }}>
                    <Button title='保 存' onPress={submit} />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
