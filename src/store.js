import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/loginredu';

const composeEnhancer =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancer(
    applyMiddleware(thunk)
);

const name = localStorage.getItem("name");
const id = localStorage.getItem("id");
const email = localStorage.getItem("email");
const dob = localStorage.getItem("dob");
const password = localStorage.getItem("password");
const INITIAL_STATE = {
    auth: {
        dob: '',
        email: '',
        id: '',
        name: '',
        password:''
    }
}

if ( id && email) {
    INITIAL_STATE.auth.name = name;
    INITIAL_STATE.auth.id = id;
    INITIAL_STATE.auth.email = email;
    INITIAL_STATE.auth.dob = dob;
    INITIAL_STATE.auth.password = password;

}

export default createStore(rootReducer, INITIAL_STATE, enhancer);