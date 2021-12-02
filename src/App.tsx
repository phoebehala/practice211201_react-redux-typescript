import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
//import { State } from "./state/reducers";

function App() {

  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State)=>state.bank)

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>{depositeMoney(1000)}} >Deposite</button>
      <button onClick={()=>{ withdrawMoney(500)}}>Withdraw</button>
      <button onClick={()=>{bankrupt()}}>Bankrupt</button>
    </div>
  );
}

export default App;
