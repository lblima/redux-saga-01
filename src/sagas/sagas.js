import { RANDOM_DOG_API_CALL_REQUEST, AFRICAN_DOG_API_CALL_REQUEST } from '../actions/types';
import { takeLatest, takeEvery, all, select } from 'redux-saga/effects';
import randonDogSaga from './random_dog_saga';
import randomAfricanDog from './african_dog_saga';

// create Saga watcher (using js generators)
export function* watcherSaga() {
    yield all([
        yield takeEvery('*', function* logger(action) {
            const state = yield select();
            console.log('action', action);
            console.log('state', state)
        }),
        yield takeLatest(RANDOM_DOG_API_CALL_REQUEST, randonDogSaga),
        yield takeLatest(AFRICAN_DOG_API_CALL_REQUEST, randomAfricanDog)
    ]);
}