import React,{Component,}from 'react';
import {View,Text,TouchableNativeFeedback,TouchableOpacity,Platform} from 'react-native';
import {Icon} from '../';
import PropTypes from 'prop-types';
import {FabButtonStyle as Styles} from './styles';
export default  class FabButton extends React.Component{
    render(){
        const TouchableComponent= Platform.OS==='ios' ? TouchableOpacity:TouchableNativeFeedback;
        const {icon,onPress,style} =this.props;

        return(
            <View style={[Styles.container,style]}>
                <TouchableComponent onPress={onPress} style={Styles.touchable}>
                    <View style={Styles.touchableContent}>
                <Icon name={icon} tintColor='white'/>
                </View>
                </TouchableComponent>
            </View>
        );
    }
}
FabButton.propTypes={
    icon: PropTypes.string,
    onPress: PropTypes.func,
    style:PropTypes.any,
};