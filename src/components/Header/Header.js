import React,{Component}from 'react';
import {Text,View} from 'react-native';
import {headerStyles as styles}from './styles';
export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <Text style={styles.subtitle}>Hangi Ülkeyi merak ediyorsun?</Text>
                <View style={styles.line}/>
                <Text style={styles.title}>COUNTRIES</Text>
            </View>
        )
    }
}