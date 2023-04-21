import React from 'react';

interface WalletConnectContextValue {
    provider?: any;
}

export const WalletConnectContext = React.createContext<WalletConnectContextValue>({} as WalletConnectContextValue);

export const useWalletConnectContext = () => {
    const context = React.useContext(WalletConnectContext);

    if (!context) {
        throw new Error('Missing wrapping with WalletConnectContext.Provider');
    }

    return context;
};
