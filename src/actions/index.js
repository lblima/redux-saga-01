import { RANDOM_DOG_API_CALL_REQUEST, AFRICAN_DOG_API_CALL_REQUEST } from './types';

export function requestRandomDog() {
    return {
        type: RANDOM_DOG_API_CALL_REQUEST
    }
}

export function requestAfricanDog() {
    return {
        type: AFRICAN_DOG_API_CALL_REQUEST
    }
}