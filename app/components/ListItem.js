import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable"
import { render } from "react-dom";

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightAction }) {
  return (  
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight 
      underlayColor={colors.light}
      onPress={onPress}
    >
      <View style={styles.container}>
        {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailContainer}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>}
      </View>
        <MaterialCommunityIcons 
        color={colors.medium}
        style={styles.righticon} name='chevron-right' size={25}/>
    </View>
    </TouchableHighlight>
    </Swipeable>   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
   
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
  righticon: {
    alignItems: 'flex-end'
  }
});

export default ListItem;
