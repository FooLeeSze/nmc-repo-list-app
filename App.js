import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Home from './src/screens/Home';
import prepStore from './src/redux/prepStore';

// Redux store
const store = prepStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar 
          barStyle='black'
          backgroundColor='white'
        />
        <Home />
      </View> 
    </Provider>
    
  );
}