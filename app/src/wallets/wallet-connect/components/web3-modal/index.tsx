import React from 'react';
import { Web3Modal as BaseWeb3Modal } from '@web3modal/react-native';
import { configs } from '~configs';

export const Web3Modal = () => {
    return <BaseWeb3Modal projectId={configs.walletConnect.projectId} relayUrl={configs.walletConnect.relayUrl} />;
};
