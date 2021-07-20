import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { query } from '../api/kotoba'
import styles from './styles'
import { toast } from "../utils/chaos"

const KotobaItem = ({content}) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginTop: 12, marginLeft: 12, marginRight: 12,padding: 12, backgroundColor:'#fff' }}>
            <Text style={styles.textline}>{content}</Text>
        </View>
    )
}

export default function KotobaList({navigation}) {
    const [kotobas, setKotobas] = useState([])
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Kotoba', {item})}>
                <KotobaItem content={item.content}></KotobaItem>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        query({}).then(res => {
            if(res.data.status === 0) {
                console.log(res.data.data)
                setKotobas(res.data.data.result)
            } else {
                toast(res.data.message)
            }
        }).catch(e => {
            toast('发生未知错误')
        })
    }, [])

    return (
        <>
            <FlatList
                data={kotobas}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            >
            </FlatList>
            <TouchableOpacity style={{ width: 50, height: 50, position: 'absolute', bottom: 25, right: 25 }} onPress={() => navigation.navigate('Kotoba')}>
                <Ionicons name="add-circle-outline" style={{ fontSize: 50, color: '#694fad' }} />
            </TouchableOpacity>
        </>
    )
}
