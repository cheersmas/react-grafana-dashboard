import actionTypes from './action-types'
import randomData from '../utils/random-data-generators'

const updateLineData = (data) => {
    return {
        type: actionTypes.UPDATE_LINE_DATA,
        payload: data
    }
}

const updateBarData = (data) => {
    return {
        type: actionTypes.UPDATE_BAR_DATA,
        payload: data
    }
}

const updateSpiralData = (data) => {
    return {
        type: actionTypes.UPDATE_SPIRAL_DATA,
        payload: data
    }
}


export const updateData = (type) => {
    switch (type) {
        case 'bar':
            return ((dispatch)=>dispatch(updateBarData(randomData.generateBarData())))
        case 'spiral':
            return ((dispatch)=>dispatch(updateSpiralData(randomData.generateSpiralData())))
        case 'line':
            return ((dispatch)=>dispatch(updateLineData(randomData.generateLineData())))
        default:
            return null
    }
}