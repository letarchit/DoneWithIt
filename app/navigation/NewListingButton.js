import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import colors from '../config/colors'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function NewListingButton({ onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
             <View style={styles.container}>
           <MaterialCommunityIcons
           name="plus-circle"
           color={colors.white}
           size={40}/> 
        </View>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 20,
        borderWidth: 10,
        borderColor: colors.white

    }
})
