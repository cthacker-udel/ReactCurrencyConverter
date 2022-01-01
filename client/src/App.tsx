import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './modules/components/MainPage';
import { DispatchContext } from './modules/util/dispatch.context.create/DispatchContext';
import { StateContext } from './modules/util/state.context.create/StateContext';
import { useReducer } from 'react';
import { CurrencyReducer } from './modules/util/reducer.function/CurrencyReducer';
import { InitialState } from './modules/util/initial.state/InitialState';

export const App = () => {

    const [state, dispatch] = useReducer(CurrencyReducer, InitialState);

    const dispatchValue = { dispatch };
    const stateValue = { state };

    return(
        <DispatchContext.Provider value={dispatchValue}>
            <StateContext.Provider value={stateValue}>
                <MainPage />
            </StateContext.Provider>
        </DispatchContext.Provider>
    );

};

export default App;
