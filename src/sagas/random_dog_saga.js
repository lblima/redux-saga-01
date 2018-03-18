import { RANDOM_DOG_API_CALL_REQUEST, RANDOM_DOG_API_CALL_SUCCESS, 
            RANDOM_DOG_API_CALL_FAILURE } from '../actions/types';
import { call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

function fetchRandomDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
    });
}

export default function* randonDogSaga() {
    try {
        const response = yield call(fetchRandomDog);
        const dog = response.data.message;

        yield put({ type: RANDOM_DOG_API_CALL_SUCCESS, payload: dog });
    }
    catch(e) {
        yield put({ type: RANDOM_DOG_API_CALL_FAILURE, payload: null, error: e });
    }
}