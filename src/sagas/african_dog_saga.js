import { AFRICAN_DOG_API_CALL_REQUEST, AFRICAN_DOG_API_CALL_SUCCESS,
         AFRICAN_DOG_API_CALL_FAILURE } from '../actions/types';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

function fetchRandomAfricanDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breed/african/images/random'
    })
}

export default function* randomAfricanDog() {
    try {
        const response = yield call(fetchRandomAfricanDog);
        const dog = response.data.message;

        yield put({ type: AFRICAN_DOG_API_CALL_SUCCESS, payload: dog});
    }
    catch(e) {
        yield put({ type: AFRICAN_DOG_API_CALL_FAILURE, error: e});
    }
}