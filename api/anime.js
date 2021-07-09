import request from '../utils/request'

export function getAnimes(year, season) {
    let url = 'https://api.jikan.moe/v3/season/' + year + '/' + season
    return request({
        method: 'get',
        url
    })
}
