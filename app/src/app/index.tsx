/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Web3Modal, Web3Button } from '@web3modal/react-native';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { configs } from '~configs';
import { ButtonConnectWalletConnect } from '~wallets/wallet-connect/components';
import { WalletConnectProvider } from '~wallets/wallet-connect/contexts/provider';

const App = () => {
    return (
        <WalletConnectProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Sample Wallet Connect V2</Text>

                    <ButtonConnectWalletConnect />
                    <Web3Modal projectId={configs.walletConnect.projectId} relayUrl={configs.walletConnect.relayUrl} />
                </View>

                <StatusBar translucent barStyle={'dark-content'} />
            </SafeAreaView>
        </WalletConnectProvider>
    );
};

export default App;
