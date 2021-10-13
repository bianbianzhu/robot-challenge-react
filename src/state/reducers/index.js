import { combineReducers } from "redux";
import robots from './positionReducer'

const reducers = combineReducers({

    robots,//this is a key, so it will be state.robots.robots[0] to get the single robot info
})

export default reducers


