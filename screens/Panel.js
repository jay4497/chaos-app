import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const panelItems = [
    {
        id: '0',
        screen: 'Animes',
        title: 'Animes'
    },
    {
        id: '1',
        screen: 'KotobaList',
        title: 'Kotoba'
    }
]

const Item = ({title, screen}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate(screen) }}>
            <Text style={styles.itemtext}>{title}</Text>
            <Ionicons name='md-chevron-forward-outline' style={styles.itemtext} />
        </TouchableOpacity>
    )
}

export default function Panel() {
    const renderItem = ({item}) => {
        return (<Item title={item.title} screen={item.screen} />)
    }

    return (
        <View style={{ marginTop: 12 }}>
            <FlatList
                data={panelItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ marginTop: 0 }}
            />
        </View>
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
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 8
    },
    itemtext: {
        fontSize: 16,
        height: 40,
        lineHeight: 40
    }
})
