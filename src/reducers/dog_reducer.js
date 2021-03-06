import { RANDOM_DOG_API_CALL_REQUEST, RANDOM_DOG_API_CALL_SUCCESS, 
        RANDOM_DOG_API_CALL_FAILURE, AFRICAN_DOG_API_CALL_REQUEST,
        AFRICAN_DOG_API_CALL_SUCCESS, AFRICAN_DOG_API_CALL_FAILURE } from '../actions/types';

const initialstate = {
    fetching: false,
    dog: null,
    error: null
}

export default (state = initialstate, action) => {
    switch(action.type) {
        case RANDOM_DOG_API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case RANDOM_DOG_API_CALL_SUCCESS:
            return { ...state, fetching: false, dog: action.payload, error: null };
        case RANDOM_DOG_API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error };
        case AFRICAN_DOG_API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case AFRICAN_DOG_API_CALL_SUCCESS:
            return { ...state, fetching: false, dog: action.payload, error: null };
        case AFRICAN_DOG_API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error };

        default:
            return state;
    }
}