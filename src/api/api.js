import { getToken } from '../component/auth/Auth';

export const get = async (bearer, api_url) => {
    try {
        const response = await fetch(
            api_url,
            {
                method: 'get',
                headers: new Headers({
                    'Authorization': bearer ? 'Bearer ' + getToken() : getToken(),
                    'x-api-key': process.env.REACT_APP_PROTAL_API_KEY
                }),
            }
        );
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch(e) {
        console.error(e);
        return e;
    }
}

export const post = async (bearer, api_url, body, isStringifyBody) => {
    try {
        const response = await fetch(
            api_url,
            {
                method: 'post',
                headers: new Headers({
                    'Authorization': bearer ? 'Bearer ' + getToken() : getToken(),
                    'x-api-key': process.env.REACT_APP_PROTAL_API_KEY,
                    'Content-Type': 'application/json'
                }),
                body: !isStringifyBody ? JSON.stringify(body) : body
            }
        );
        const jsonResponse = await response.json();
        return {statusCode: response.status, ...jsonResponse};
    } catch(e) {
        console.error(e);
        throw e;
    }
}