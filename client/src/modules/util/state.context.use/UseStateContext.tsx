import { State } from "../../interfaces/State";
import { StateContext } from "../state.context.create/StateContext";
import React from 'react';

export const UseStateContext =  (): { state: State } => {

    const state = React.useContext(StateContext);
    if (state === undefined) {
        throw new Error('Unable to access State context');
    }
    return state;

};