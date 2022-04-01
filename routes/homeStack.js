import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HelloWorldApp from '../screens/home';

const screens = {
  Home: {
    screen: HelloWorldApp,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
