import request from '../utils/request'
import { AUTH_BASE_URL } from '@env'

export function create(data) {
    return request({
        method: 'post',
        url: AUTH_BASE_URL + '/kotoba',
        data
    })
}

export function query(params) {
    return request({
        method: 'get',
        url: AUTH_BASE_URL + '/kotoba',
        params
    })
}
