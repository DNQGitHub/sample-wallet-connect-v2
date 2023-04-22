import { createNativeNotificationService } from '@sendbird/uikit-react-native';
import RNFBMessaging from '@react-native-firebase/messaging';
import * as Permissions from 'react-native-permissions';

export const NotificationService = createNativeNotificationService({
    messagingModule: RNFBMessaging,
    permissionModule: Permissions,
});
