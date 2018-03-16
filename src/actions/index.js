import { RANDOM_DOG_API_CALL_REQUEST, RANDOM_DOG_API_CALL_SUCCESS, 
            RANDOM_DOG_API_CALL_FAILURE } from './types';

export function requestRandomDog() {
    return {
        type: RANDOM_DOG_API_CALL_REQUEST
    }
}