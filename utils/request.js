const base_url = ''

function request(url, method, headers, body) {
    headers = headers? headers: {}
    body = body? body: {}
    return fetch(url, {
        method,
        headers,
        body,
    })
}

function serialize(obj) {
    let str = []
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
    return str.join("&")
}

export function login(data) {
    return request('/login', 'POST', {}, data)
}

export function anime(url) {
    return request(url)
}
