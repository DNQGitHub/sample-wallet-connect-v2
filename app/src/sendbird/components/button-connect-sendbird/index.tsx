import { useConnection, useSendbirdChat } from '@sendbird/uikit-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GestureResponderEvent } from 'react-native-modal';

const LOG_TAG = '-- ButtonConnectSendbird --';

export const ButtonConnectSendbird = () => {
    const { connect } = useConnection();

    const _onPress = (e: GestureResponderEvent) => {
        console.log(LOG_TAG, 'onPress');

        connect('q-test-2')
            .then((user) => {
                console.log(LOG_TAG, { user });
            })
            .catch((err) => console.log(LOG_TAG, { err }));
    };

    return (
        <TouchableOpacity
            style={{ borderWidth: 1, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 }}
            onPress={_onPress}
        >
            <Text>Connect</Text>
        </TouchableOpacity>
    );
};
