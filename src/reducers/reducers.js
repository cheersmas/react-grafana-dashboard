import actionTypes from '../actions/action-types'

export function bar(state = {}, action) {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.UPDATE_BAR_DATA:
            newState.barData = action.payload
            return newState;
        default:
            return state;
    }
}

export function line(state = {}, action) {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.UPDATE_LINE_DATA:
            newState.lineData = action.payload
            return newState

        default:
            return state;
    }
}

export function spiral(state = {}, action) {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.UPDATE_SPIRAL_DATA:
            newState.spiralData = action.payload
            return newState

        default:
            return state;
    }
}