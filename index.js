/**
 * @format
 */
 import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };
export default function Main() {



    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }

  
AppRegistry.registerComponent(appName, () => Main);
