import { combineReducers  } from "redux";
import counterReducer from "./CounterReducer";
import isLoggedinReducer from "./IsLoggedinReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    isLoggedin: isLoggedinReducer
});

// Export the root reducer
export default rootReducer;
