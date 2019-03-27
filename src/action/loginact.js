import * as authService from '../service/service';
import { LOGIN_SUCCESSFUL, FAILED } from '../reducer/loginredu';

export const loginUser = (credentials) => {
    return (dispatch) => {
        authService.login(credentials)
            .then((response) => {
                if (response.status === 200) {
                    //localStorage.setItem("name", response.data.user.token)
                    localStorage.setItem("id", response.data.user.id)
                    // const fullname = response.data.user.firstName + " " + response.data.user.lastName
                    localStorage.setItem("name", response.data.user.name)
                    localStorage.setItem("email", response.data.user.email)
                    localStorage.setItem("password", response.data.user.password)
                    dispatch({
                        type: LOGIN_SUCCESSFUL,
                        data: { id: response.data.user.id, name: response.data.user.name, email: response.data.user.email, password: response.data.user.password }
                    });
                }
            })
            .catch((error) => {
                if (error) {
                    dispatch({ type: FAILED, data: { error_msg: error.response.data.error } });
                }
            });
    }
};

export const RegisterUser = (credentials) => {
    return (dispatch) => {
        authService.signUp(credentials)
            .then((response) => {
                if (response.status === 200) {
                    let credentials_Login = {
                        email: credentials.email,
                        password: credentials.password
                    }
                    authService.login(credentials_Login)
                        .then((response) => {
                            // const fullname = response.data.user.name
                            localStorage.setItem("token", response.data.user.token)
                            localStorage.setItem("userId", response.data.user.id)
                            localStorage.setItem("role", response.data.user.role)
                            localStorage.setItem("Name", response.data.user.name)
                            dispatch({
                                type: LOGIN_SUCCESSFUL,
                                data: { token: response.data.user.token, userId: response.data.user.id, Role: response.data.user.role, Name: response.data.user.name }
                            });
                        })
                }
            })
            .catch((error) => {
                if (error) {
                    dispatch({ type: FAILED, data: { error_msg: error.response.data.error } });
                }
            })
    }
}
