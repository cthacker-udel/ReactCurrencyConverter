import { CurrencyAction } from "../../interfaces/CurrencyAction";
import { State } from "../../interfaces/State";

export const CurrencyReducer = (state: State, action: CurrencyAction) => {

    switch (action.type) {

        default: {
            return { ...state };
        }

    }

};