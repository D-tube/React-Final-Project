import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HelloWorldApp from '../screens/home';
import Camera from '../screens/camera';
const screens = {
  Home: {
    screen: HelloWorldApp,
  },
  Camera: {
    screen: Camera,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
