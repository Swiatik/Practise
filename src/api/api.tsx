import axios from "axios";

export var instance = axios.create({
    baseURL: 'https://linkstagram-api.ga/'    
});

export function setToken(token: string): void {
    instance = axios.create({
        baseURL: 'https://linkstagram-api.ga/',
        headers: {
            "authorization": token 
        }
    });
}

export function deleteToken(): void {
    instance = axios.create({
        baseURL: 'https://linkstagram-api.ga/'    
    });
}