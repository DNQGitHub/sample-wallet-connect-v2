import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '~app/constants';
import { GroupChannelListFragment } from '~sendbird/components';

export const GroupChannelList = () => {
    const { navigate } = useNavigation<any>();

    return (
        <GroupChannelListFragment
            onPressCreateChannel={(channelType) => {
                navigate(RouteNames.GROUP_CHANNEL_CREATE, { channelType });
            }}
            onPressChannel={(channel) => {
                // Navigate to GroupChannel function.
                navigate(RouteNames.GROUP_CHANNEL, { channelUrl: channel.url });
            }}
        />
    );
};
