import React,{Component} from 'react';

import PropTypes from 'prop-types';
import Icons from '../../assets/icon';
import {colors}from '../../config/color'
export default class Icon extends React.Component{
    render(){
        const{name,tintColor}=this.props;
        const TargetIcon = Icons[name];

        return(            
                <TargetIcon tintColor={tintColor}{...this.props}/>
        );
    }
}
Icon.PropTypes={
    name:PropTypes.string,
    tintColor:PropTypes.string,
};  
Icon.defaultProps={
    tintColor:colors.accent,
};