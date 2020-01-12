import * as types from '../actions-types'
let inisState = { list: [] }
export default function (state = inisState, action) {
    switch(action.type) {
        case types.SET_HOME_LIST:
            return { list: action.payload }
        default:
            return state
    }
}