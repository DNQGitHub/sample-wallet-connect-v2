import { createNativeMediaService } from '@sendbird/uikit-react-native';
import Video from 'react-native-video';
import * as CreateThumbnail from 'react-native-create-thumbnail';
import * as ImageResizer from '@bam.tech/react-native-image-resizer';

export const MediaService = createNativeMediaService({
    VideoComponent: Video,
    thumbnailModule: CreateThumbnail,
    imageResizerModule: ImageResizer,
});
