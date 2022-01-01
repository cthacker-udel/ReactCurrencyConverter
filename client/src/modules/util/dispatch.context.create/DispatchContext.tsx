import React from 'react';

export const DispatchContext = React.createContext<{ dispatch: React.Dispatch<CurrencyAction>} | undefined>(undefined);