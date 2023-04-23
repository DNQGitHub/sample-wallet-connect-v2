import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { ButtonConnectSendbird, SendBirdUIKitContainer } from '~sendbird/components';

export const SampleSendbirdUIKit = () => {
    return (
        <SendBirdUIKitContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Sample Sendbird UIKit</Text>
                    <ButtonConnectSendbird />
                </View>

                <StatusBar translucent barStyle={'dark-content'} />
            </SafeAreaView>
        </SendBirdUIKitContainer>
    );
};
