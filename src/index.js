import React,{Component}from 'react';
import {Text,SafeAreaView,} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './config/store';
import Home from './screens/Home/Home';
export default class App extends React.Component{
render()
{
    return(
       
       <Provider store={store}>
       <SafeAreaView style={{flex:1}}>
          <Home/>

       </SafeAreaView>         
         </Provider>
    );

}
}
