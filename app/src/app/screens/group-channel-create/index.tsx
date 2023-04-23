import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '~app/constants';
import { GroupChannelCreateFragment } from '~sendbird/components';

export const GroupChannelCreate = () => {
    const { replace, goBack } = useNavigation<any>();

    return (
        <GroupChannelCreateFragment
            onCreateChannel={async (channel) => {
                replace(RouteNames.GROUP_CHANNEL, { channelUrl: channel.url });
            }}
            onPressHeaderLeft={() => {
                goBack();
            }}
        />
    );
};
