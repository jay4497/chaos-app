import axios from 'axios'
import { ToastAndroid } from 'react-native'
import qs from 'qs'
import AsyncStorage from '@react-native-async-storage/async-storage'

const service = axios.create({
    timeout: 300,
    validateStatus: function (status) {
        return status >= 200 && status < 400
    }
})

service.interceptors.request.use(async (config) => {
    const uid = await AsyncStorage.getItem('auth_uid')
    const token = await AsyncStorage.getItem('auth_token')
    if(uid !== null && token !== null) {
        config.headers['Chaos-Token'] = uid.toString() + ' ' + token.toString()
    }
    config.data = qs.stringify(config.data)
    return config
})

service.interceptors.response.use((res) => {
    return res
}, (err) => {
    ToastAndroid.show('发生未知错误', ToastAndroid.SHORT)
})

export default service
