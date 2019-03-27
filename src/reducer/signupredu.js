const INITIAL_STATE = {
    Data: [],
    error_msg: ""
    //addData : []
}

export const addData = "addData"
export const getData = "getData"

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case addData: {
            debugger
            //console.log("data",state);
            const n = state.Data.concat(action.Data);
            return Object.assign({}, state, { Data: n })
        }
        case getData: {
            return Object.assign({}, state, { Data: action.Data })
        }

        default:
            return state
    }
}