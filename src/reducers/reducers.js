import actionTypes from '../actions/action-types'

export function updateBarData(state = {}, action) {
    switch (action.type) {
        case actionTypes.UPDATE_BAR_DATA:
            let newState = state
            state.barData = action.payload
            return newState;

        default:
            return state;
    }
}

export function updateLineData(state = {}, action) {
    switch (action.type) {
        case actionTypes.UPDATE_LINE_DATA:
            let newState = state
            state.lineData = action.payload
            return newState;

        default:
            return state;
    }
}

export function updateSpiralData(state = {}, action) {
    switch (action.type) {
        case actionTypes.UPDATE_SPIRAL_DATA:
            let newState = state
            state.spiralData = action.payload
            return newState;

        default:
            return state;
    }
}