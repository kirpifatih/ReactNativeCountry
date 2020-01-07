import React ,{Component} from 'react';
import {Text,View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import  {Icon} from '../../components';
import {colors} from '../../config/color';
import {countryObjectStyles as Styles}from './styles';
export default class CountryObject extends React.Component{
    render(){
        const TouchableComponent= Platform.OS=== 'ios'? TouchableOpacity:TouchableNativeFeedback;
        const countryName='Some Country';
        return(
            <TouchableComponent style={Styles.container}>
            <View style={Styles.contentContainer}>
                <View style={Styles.countryFlag}/>
                <Text style={Styles.countryName}>{countryName}</Text>
                <Icon name='arrow' tintColor={colors.text_color}/>
            </View>
            </TouchableComponent>
        );

    }
}