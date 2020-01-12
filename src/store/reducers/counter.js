import * as types from '../actions-types'
let inisState = { number: 0 }
export default function (state = inisState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return { ...state, number: state.number + 1 }
        default:
            return state
    }
}