/**
 * @format
 */
import '@walletconnect/react-native-compat';
import '@ethersproject/shims';

import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
