import { Platform } from 'react-native'

import colors from '../config/colors'

export default {
    colors,
    text: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
 
    }
}
