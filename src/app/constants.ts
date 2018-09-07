const API_URL = 'http://localhost:3000/api/v1';

export function apiUrl(resource = null, urlParam = null): string{
    let baseUrl = API_URL;
    
    if(resource != null) {
        baseUrl += `/${resource}`;

        if(urlParam != null){
            baseUrl += `/${urlParam}`;
        }
    }

    return baseUrl;
}