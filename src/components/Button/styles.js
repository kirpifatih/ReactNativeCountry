import {StyleSheet,Platform} from 'react-native';
import {colors} from '../../config/color';
export const FabButtonStyle =StyleSheet.create({
    container:{
        width:56,
        height:56,
        backgroundColor:colors.accent,
        ...Platform.select({
            ios:{
                shadowColor:'black',
                shadowRadius:10,
                shadowOpacity: 0.25,
                shadowOffset: {height:5,},

            },
            android:{
                elevation:10,
                borderRadius:28,
                overflow:'hidden',
            },
        }),

    },
    touchable:{
        flex:1,
        alignSelf:'stretch',
    },
    touchableContent:{
        flex:1,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
    },
});