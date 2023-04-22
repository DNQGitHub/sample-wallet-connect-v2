import React, { PropsWithChildren } from 'react';
import { SendbirdUIKitContainer as BaseSendbirdUIKitContainer } from '@sendbird/uikit-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FileService, NotificationService, ClipboardService, MediaService } from '~sendbird/services';
import { configs } from '~configs';

export const SendBirdUIKitContainer = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <BaseSendbirdUIKitContainer
            appId={configs.sendbird.appId}
            chatOptions={{ localCacheStorage: AsyncStorage }}
            platformServices={{
                file: FileService,
                notification: NotificationService,
                clipboard: ClipboardService,
                media: MediaService,
            }}
        >
            {children}
        </BaseSendbirdUIKitContainer>
    );
};
