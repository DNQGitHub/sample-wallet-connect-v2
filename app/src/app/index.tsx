import React from 'react';
import { AppNavigation } from './navigations';
import { SendBirdUIKitContainer } from '~sendbird/components';
import { composeNestedComponents } from '~common/utils';

const MultiProviders = composeNestedComponents([SendBirdUIKitContainer, AppNavigation]);

const App = () => {
    return <MultiProviders />;
};

export default App;
