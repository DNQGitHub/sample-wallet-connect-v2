import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from '~app/constants';
import {
    GroupChannelCreate,
    GroupChannelList,
    GroupChannel,
    SampleSendbirdUIKit,
    SampleWalletConnectV2,
} from '~app/screens';
import { useSendbirdChat } from '@sendbird/uikit-react-native';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    const { currentUser } = useSendbirdChat();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!currentUser ? (
                    <>
                        <Stack.Screen name={RouteNames.SAMPLE_SENDBIRD_UI_KIT} component={SampleSendbirdUIKit} />
                        <Stack.Screen name={RouteNames.SAMPLE_WALLET_CONNECT_V2} component={SampleWalletConnectV2} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name={RouteNames.GROUP_CHANNEL_LIST} component={GroupChannelList} />
                        <Stack.Screen name={RouteNames.GROUP_CHANNEL_CREATE} component={GroupChannelCreate} />
                        <Stack.Screen name={RouteNames.GROUP_CHANNEL} component={GroupChannel} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
