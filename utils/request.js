import axios from 'axios'
import { ToastAndroid } from 'react-native'

const service = axios.create({
    timeout: 300,
    validateStatus: function (status) {
        return status >= 200 && status < 400
    }
})

service.interceptors.response.use((res) => {
    return res
}, (err) => {
    ToastAndroid.show('发生未知错误', ToastAndroid.SHORT)
})

export default service
