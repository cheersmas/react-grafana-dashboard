import { combineReducers } from 'redux';
import { bar, line, spiral} from './reducers';

export default combineReducers({
    bar,
    line,
    spiral
});