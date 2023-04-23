import React from 'react';
import { AppNavigation } from './navigations';
import { SendbirdUIKitContainer } from '~sendbird/components';
import { composeNestedComponents } from '~common/utils';

const MultiNestedProviders = composeNestedComponents([SendbirdUIKitContainer]);

const App = () => {
    return (
        <MultiNestedProviders>
            <AppNavigation />
        </MultiNestedProviders>
    );
};

export default App;
