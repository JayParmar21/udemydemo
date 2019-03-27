import { addData, getData } from '../reducer/signupredu'
import * as service from '../service/service'

export const addAction = (data) => {
    debugger
    return (dispatch) => {
        service.addData(data).then((response) => {
            console.log(response.data)
            if (response.status === 200) {

                dispatch(
                    {
                        type: addData,
                        Data: response.data
                    }
                );
            }
        })
            .catch((error) => {
                console.log("error::", error);
            })
    }
}

export const getAction = (data) => {
    return (dispatch) => {
        service.getData(data).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: getData,
                        Data: response.data
                    }
                );
            }
        })
            .catch((error) => {
                console.log("error::", error);
            })
    }
}

