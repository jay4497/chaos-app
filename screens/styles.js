import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    navtitle: {
        fontSize: 24,
        height: 40,
        lineHeight: 40,
        marginTop: 12,
        marginBottom: 16,
        paddingLeft: 12
    },
    inputcontrol: {
        flexDirection: 'row',
        marginTop: 12
    },
    input: {
        flex: 1,
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 5,
        paddingRight: 12,
        paddingLeft: 12,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        lineHeight: 40,
        height: 40,
        backgroundColor: '#fff'
    },
    textarea: {
        flex: 1,
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 5,
        paddingRight: 12,
        paddingLeft: 12,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        lineHeight: 25,
        textAlignVertical: 'top',
        backgroundColor: '#fff'
    },
    textline: {
        lineHeight: 24
    }
})

export default globalStyles
