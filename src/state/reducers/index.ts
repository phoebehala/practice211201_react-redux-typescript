import {combineReducers} from "redux";
import BankReducer from "./BankReducer";

const reducers = combineReducers({
    bank: BankReducer
})

export default reducers;

// ReturnType  >>> typescript type
export type State = ReturnType<typeof reducers>