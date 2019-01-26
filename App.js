import React from 'react';
import HybridApp from './src/Fapp';
import Result from './src/Result';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import Store from './src/Store/configureStore'

const Stack = StackNavigator({
  HybridApp: {screen: HybridApp},
  Result: {screen: Result},
  navigationOptions: ({navigation}) => ({
    header: false
  }),
},
{
  title: 'Main',
  initialRouteName: 'HybridApp',
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Stack/>
      </Provider>
    )
  }
}
