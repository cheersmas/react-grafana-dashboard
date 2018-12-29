import { combineReducers } from 'redux';
import { updateLineData, updateBarData, updateSpiralData} from './reducers';

export default combineReducers({
    updateBarData,
    updateSpiralData,
    updateLineData
});