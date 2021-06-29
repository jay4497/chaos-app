import AsyncStorage from '@react-native-async-storage/async-storage'

export async function check() {
    try {
        const value = await AsyncStorage.getItem('auth_token')
        return value
    } catch(e) {
        return null
    }
}

export async function getRefreshToken() {
    let refresh_token = null
    try {
        refresh_token = await AsyncStorage.getItem('refresh_token')
        return refresh_token
    } catch(e) {
        return null
    }
}

export async function clearAuth() {
    try {
        await AsyncStorage.removeItem('auth_token')
        return true
    } catch(e) {
        return false
    }
}

export async function setAuth(token) {
    try {
        await AsyncStorage.setItem('auth_token', token)
        return token
    } catch (e) {
        return null
    }
}
