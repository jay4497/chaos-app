import AsyncStorage from '@react-native-async-storage/async-storage'
import { refreshToken } from "../api/auth"

export async function check() {
    try {
        let uid = await AsyncStorage.getItem('auth_uid')
        let token = await AsyncStorage.getItem('auth_token')
        let token_expire = await AsyncStorage.getItem('auth_token_expired_at')
        if(token === null
            || token_expire === null
            || uid === null) {
            return null
        }
        let token_expire_ts = Date.parse(token_expire)
        if(token_expire_ts < Date.now()) {
            await AsyncStorage.removeItem('auth_token')
            let refresh_token = await AsyncStorage.getItem('auth_refresh_token')
            let refresh_data = {
                userid: uid,
                refresh_token: refresh_token
            }
            let result = await refreshToken(refresh_data)
            if(result.data.status === 0) {
                setAuth(result.data.data)
                return true
            } else {
                return null
            }
        }
        return true
    } catch(e) {
        return null
    }
}

export async function getUid() {
    try {
        const uid = await AsyncStorage.getItem('auth_uid')
        return uid
    } catch (e) {
        return null
    }
}

export async function getToken() {
    try {
        const token = await AsyncStorage.getItem('auth_token')
        return token
    } catch (e) {
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

export async function setAuth(token_data) {
    try {
        let auth_info = [
            ['auth_uid', token_data.userid.toString()],
            ['auth_token', token_data.access_token],
            ['auth_token_expired_at', token_data.access_token_expire],
            ['auth_refresh_token', token_data.refresh_token]
        ]
        await AsyncStorage.multiSet(auth_info)
        return true
    } catch (e) {
        return null
    }
}
