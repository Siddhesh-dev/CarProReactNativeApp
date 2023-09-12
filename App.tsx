/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import { store } from './src/store/store';

import RootNavigation from './src/navigation/RootNavigation';



function App(): JSX.Element {


  return (
    <Provider store={store}>

      <RootNavigation></RootNavigation>

    </Provider>
  );
}


export default App;
