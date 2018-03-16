import { RANDOM_DOG_API_CALL_REQUEST, RANDOM_DOG_API_CALL_SUCCESS, 
        RANDOM_DOG_API_CALL_FAILURE, AFRICAN_DOG_API_CALL_REQUEST,
        AFRICAN_DOG_API_CALL_SUCCESS, AFRICAN_DOG_API_CALL_FAILURE } from './actions/types';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

// create Saga watcher (using js generators)
export function* watcherSaga() {
    // yield takeLatest(RANDOM_DOG_API_CALL_REQUEST, randonDogSaga);
    // yield takeLatest(AFRICAN_DOG_API_CALL_REQUEST, randomAfricanDog);

    yield all([
        yield takeLatest(RANDOM_DOG_API_CALL_REQUEST, randonDogSaga),
        yield takeLatest(AFRICAN_DOG_API_CALL_REQUEST, randomAfricanDog)
    ]);
}

// ============= Random Dog
function fetchRandomDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
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

// ============= Random African Dog

function fetchRandomAfricanDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breed/african/images/random'
    })
}

function* randomAfricanDog() {
    try {
        const response = yield call(fetchRandomAfricanDog);
        const dog = response.data.message;

        yield put({ type: AFRICAN_DOG_API_CALL_SUCCESS, payload: dog});
    }
    catch(e) {
        yield put({ type: AFRICAN_DOG_API_CALL_FAILURE, error: e});
    }
}