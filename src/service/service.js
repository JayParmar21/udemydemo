import base from './base'

export function getData(data){
    return base.get('/',data);
}

export function addData(data){
    return base.post('/data',data);
}
export function login(credential) {
    return base.post('/auth/login', credential);
}

export function signUp(data) {
    return base.post('/data', data);
}