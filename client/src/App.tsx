import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './modules/components/MainPage';
import { DispatchContext } from './modules/util/dispatch.context.create/DispatchContext';
import { StateContext } from './modules/util/state.context.create/StateContext';
import { useReducer } from 'react';
import { CurrencyReducer } from './modules/util/reducer.function/CurrencyReducer';

export const App = () => {

    const [state, dispatch] = useReducer(CurrencyReducer)

    return(
        <MainPage />
    );

};

export default App;
