import {ActionType} from '../action-types'

interface DepositeAction{
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction{
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction{
    type: ActionType.BACKRUPT
}

export type Action = DepositeAction |  WithdrawAction | BankruptAction