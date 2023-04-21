import { useWeb3Modal } from '@web3modal/react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GestureResponderEvent } from 'react-native-modal';

export const ButtonConnectWalletConnect = () => {
    const { open, isOpen, initialized } = useWeb3Modal();

    const _onPress = (e: GestureResponderEvent) => {
        if (initialized && !isOpen) {
            open({
                route: 'ConnectWallet',
            });
        }
    };

    return (
        <TouchableOpacity
            style={{ backgroundColor: '#3333F3', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 16 }}
            onPress={_onPress}
        >
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Connect</Text>
        </TouchableOpacity>
    );
};
