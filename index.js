/**
 * Please read the comments in the derived components/views/classes.
 * I've tried to narrate there so you can understand my intentions for using it in particular View.
 * And I've tried to develop the application in Typescript as suggested. And also tried not to use any third party library.
 * I've used React Navigation(Almost all dependencies) and Styled Component library in this demo application.
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
