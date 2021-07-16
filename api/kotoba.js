import request from '../utils/request'
import { AUTH_BASE_URL } from '@env'

export function create(data) {
    return request({
        method: 'post',
        url: AUTH_BASE_URL + '/kotoba',
        data
    })
}
