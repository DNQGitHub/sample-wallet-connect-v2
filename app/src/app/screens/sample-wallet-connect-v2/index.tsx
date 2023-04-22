import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { ButtonConnectWalletConnect, Web3Modal } from '~wallets/wallet-connect/components';
import { WalletConnectProvider } from '~wallets/wallet-connect/contexts/provider';

export const SampleWalletConnectV2 = () => {
    return (
        <WalletConnectProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Sample Wallet Connect V2</Text>

                    <ButtonConnectWalletConnect />
                    <Web3Modal />
                </View>

                <StatusBar translucent barStyle={'dark-content'} />
            </SafeAreaView>
        </WalletConnectProvider>
    );
};
