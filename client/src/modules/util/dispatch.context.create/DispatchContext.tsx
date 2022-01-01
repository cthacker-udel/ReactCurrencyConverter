import React from 'react';
import { CurrencyAction } from '../../interfaces/CurrencyAction';

export const DispatchContext = React.createContext<{ dispatch: React.Dispatch<CurrencyAction>} | undefined>(undefined);