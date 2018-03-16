import { RANDOM_DOG_API_CALL_REQUEST, RANDOM_DOG_API_CALL_SUCCESS, 
        RANDOM_DOG_API_CALL_FAILURE } from './actions/types';
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// create Saga watcher (using js generators)
export function* watcherSaga() {
    yield takeLatest(RANDOM_DOG_API_CALL_REQUEST, randonDogSaga);
}

function fetchRandomDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/randoms'
    });
}

function* randonDogSaga() {
    try {
        const response = yield call(fetchRandomDog);
        const dog = response.data.message;

        yield put({ type: RANDOM_DOG_API_CALL_SUCCESS, payload: dog });
    }
    catch(e) {
        yield put({ type: RANDOM_DOG_API_CALL_FAILURE, payload: null, error: e });
    }
}