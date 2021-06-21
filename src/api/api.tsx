import axios from "axios";

// const Uppy = require('@uppy/core');
// const AwsS3 = require('@uppy/aws-s3');
// const ms = require('ms');

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
    // const uppy = new Uppy()
    // const res = uppy.use(AwsS3, {
    //     limit: 2,
    //     timeout: ms('1 minute'),
    //     companionUrl: 'https://linkstagram-api.ga',
    //     path: '/s3/params',
    // })
    // console.log(res);
}

export function deleteToken(): void {
    instance = axios.create({
        baseURL: 'https://linkstagram-api.ga/'
    });
}