import React from "react";
import { CurrencyAction } from "../../interfaces/CurrencyAction";
import { DispatchContext } from "../dispatch.context.create/DispatchContext";


export const UseDispatchContext = (): {dispatch: React.Dispatch<CurrencyAction>} => {

    const dispatch = React.useContext(DispatchContext);

    if (dispatch === undefined) {
        throw new Error('Unable to access dispatch context');
    }
    return dispatch;

}