import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../config/color';
export const searchInputStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 300,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: Platform.OS === 'android' ? 4 : 8,
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    button: {
        flex: 1,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.accent,
    },
});