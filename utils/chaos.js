import { ToastAndroid } from 'react-native'

export function toast(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
}
