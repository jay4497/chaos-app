import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'

const Card = ({anime}) => {
    return (
        <View style={{paddingLeft: 12, paddingRight: 12, marginBottom: 12 }}>
            <View>
                <Image source={{ uri: anime.image_url }} style={{ height: 200 }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style={styles.tag}>{anime.type}</Text>
                <Text numberOfLines={2} style={styles.title}>{anime.title}</Text>
            </View>
            <View>
                <Text style={styles.info}>{anime.airing_start}</Text>
            </View>
        </View>
    )
}



export default function Animes() {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        fetch('https://api.jikan.moe/v3/season/2021/summer').then((res) => {
            return res.json()
        }).then((data) => {
            setAnimes(data.anime)
        })
    }, [])

    return (
        <ScrollView style={{ marginTop: 12 }}>
            {animes.map((anime, key) => {
                return (
                    <Card anime={anime} key={key} />
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    navtitle: {
        fontSize: 24,
        height: 40,
        lineHeight: 40,
        marginTop: 12,
        marginBottom: 16,
        paddingLeft: 12
    },
    title: {
        height: 36,
        lineHeight: 36,
        fontWeight: 'bold'
    },
    tag: {
        height: 36,
        lineHeight: 36,
        color: '#999',
        marginRight: 8
    },
    info: {
        color: '#999',
        fontSize: 14
    }
})
