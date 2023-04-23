import { useNavigation, useRoute } from '@react-navigation/native';
import { useSendbirdChat } from '@sendbird/uikit-react-native';
import { GroupChannelFragment } from '~sendbird/components';
import { useGroupChannel } from '@sendbird/uikit-chat-hooks';
import { RouteNames } from '~app/constants';

export const GroupChannel = () => {
    const { navigate, goBack } = useNavigation<any>();
    const { params } = useRoute<any>();

    const { sdk } = useSendbirdChat();
    const { channel } = useGroupChannel(sdk, params.channelUrl);

    if (!channel) return null;

    return (
        <GroupChannelFragment
            channel={channel}
            onChannelDeleted={() => {
                navigate(RouteNames.GROUP_CHANNEL_LIST);
            }}
            onPressHeaderLeft={() => {
                goBack();
            }}
            onPressHeaderRight={() => {
                navigate('GroupChannelSettings', { channelUrl: params.channelUrl });
            }}
        />
    );
};
