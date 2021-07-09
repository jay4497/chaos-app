import request from '../utils/request'
import { AUTH_BASE_URL } from '@env'

export async function login(data) {
    return request({
        method: 'post',
        url: AUTH_BASE_URL + '/auth/login',
        data
    })
}

export function refreshToken(data) {
    return request({
        method: 'post',
        url: AUTH_BASE_URL + '/auth/refresh_token',
        data
    })
}
