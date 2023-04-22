import { createNativeClipboardService } from '@sendbird/uikit-react-native';

import Clipboard from '@react-native-clipboard/clipboard';

export const ClipboardService = createNativeClipboardService(Clipboard);
