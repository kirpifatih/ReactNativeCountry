import React, {Component} from 'react';
import{View,TextInput,TouchableOpacity} from 'react-native';
import PropsTypes from 'prop-types';
import {searchInputStyles as Styles}from './styles';
import Icon from '../icon/icon';

export default class searchinput extends React.Component{
    render(){
        const {placeholder,onPress,onChangeText,style}=this.props;
        return(
            <View style={[Styles.container,style]}>
                <TextInput style={Styles.input} placeholder={placeholder} onChangeText={onChangeText} />
                <TouchableOpacity onPress={onPress}>
                    <View style={Styles.button} >
                        <Icon name='search' tintColor='white'/>
                    </View>
                </TouchableOpacity>
               
            </View>
        );

    }
}
searchinput.propTypes={
    placeholder:PropsTypes.string,
    onPress:PropsTypes.func,
    onChangeText:PropsTypes.func,
    style:PropsTypes.any,
};