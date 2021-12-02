import { ActionType } from "../action-types"
// Dispatch >>> Generic type 'Dispatch' which requires 1 type argument(s)
import { Dispatch } from "react"
import { Action } from "../actions"

export const depositeMoney = (amount: number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.BACKRUPT,
        })
    }
}