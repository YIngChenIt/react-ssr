import * as types from '../actions-types'
import axios from 'axios'
export default {
    getHomeList() {
        return function(dispatch, getState) {
            return axios.get('http://localhost:4000/api/users')
                .then((res) =>{
                    const list = res.data
                    dispatch({
                        type: types.SET_HOME_LIST,
                        payload: list,
                    })
                })
        }
    }
}