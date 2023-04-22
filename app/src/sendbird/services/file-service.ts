import { createNativeFileService } from '@sendbird/uikit-react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import * as DocumentPicker from 'react-native-document-picker';
import * as FileAccess from 'react-native-file-access';
import * as ImagePicker from 'react-native-image-picker';
import * as Permissions from 'react-native-permissions';

export const FileService = createNativeFileService({
    fsModule: FileAccess,
    permissionModule: Permissions,
    imagePickerModule: ImagePicker,
    mediaLibraryModule: CameraRoll,
    documentPickerModule: DocumentPicker,
});
