import { SINGNUP_REQUEST, SINGNUP_SUCCESS, SINGNUP_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGIN_FAILURE
} from '../constants'

const initialState = {
    isAuthenticated: false,
    user:{},
    token:'',
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case SINGNUP_REQUEST:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return state;
        default:
            return state;
    }
}