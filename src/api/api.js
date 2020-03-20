export const get = async (bearer, api_url) => {
    try {
        const response = await fetch(
            api_url,
            {
                method: 'get',
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
            }
        );
        const jsonResponse = await response.json();
        return {statusCode: response.status, ...jsonResponse};
    } catch(e) {
        console.error(e);
        throw e;
    }
}