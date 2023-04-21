import React, { PropsWithChildren } from 'react';
import { WalletConnectContext } from './wallet-connect-context';
import { useWeb3Modal } from '@web3modal/react-native';
import { ethers } from 'ethers';
import { resolvePromise } from '~common/utils';

const LOG_TAG = '---WalletConnectProvider---';

export const WalletConnectProvider = (props: PropsWithChildren) => {
    const { children } = props;
    const { provider } = useWeb3Modal();

    React.useEffect(() => {
        (async () => {
            console.log(LOG_TAG, { session: provider?.session });
            console.log(LOG_TAG, { isWalletConnect: provider?.isWalletConnect });

            if (provider?.isWalletConnect && provider?.session) {
                const web3 = new ethers.providers.Web3Provider(provider);

                console.log(LOG_TAG, { web3: web3 });

                const signer = web3.getSigner();

                console.log(LOG_TAG, { signer: signer });

                const [address, getAddressError] = await resolvePromise(signer.getAddress());
                const [chainId, getChainIdError] = await resolvePromise(signer.getChainId());

                console.log(LOG_TAG, {
                    address,
                    getAddressError,
                });

                console.log(LOG_TAG, {
                    chainId,
                    getChainIdError,
                });

                const message = 'This is a message';
                const encodedMessage = ethers.utils.hexlify(new TextEncoder().encode(message));
                console.log(LOG_TAG, { message, encodedMessage });
                const [signMessageSignature, signMessageError] = await resolvePromise(
                    provider.request({
                        method: 'personal_sign',
                        params: [encodedMessage, address],
                    }),
                );

                console.log(LOG_TAG, {
                    signMessageSignature,
                    signMessageError,
                });

                provider.abortPairingAttempt();
                await provider.cleanupPendingPairings();
                await provider.disconnect();
            }
        })();
    }, [provider, provider?.session, provider?.isWalletConnect]);

    return <WalletConnectContext.Provider value={{ provider }}>{children}</WalletConnectContext.Provider>;
};
