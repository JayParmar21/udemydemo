const INITIAL_STATE = {
    token: "",
    Role: '',
    error_msg: "",
    id: '',
    email: '',
    Name: ""
}
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const FAILED = 'FAILED';
export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL: {
            return Object.assign({}, state, {
                token: action.data.token,
                id: action.data.id,
                Role: action.data.Role,
                Name: action.data.Name,
                error_msg: ""
            });
        }
        case REGISTER_SUCCESSFUL: {
            return Object.assign({}, state, { email: action.users.email, error_msg: "" });
        }

        case FAILED: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }

        default:
            return state;
    }
}