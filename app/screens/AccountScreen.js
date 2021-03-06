import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'


import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'

import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator';
const menuItems = [
    {
        title: "My Listing",
        icon : {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon : {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    },
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
            title="Archit Verma" 
            subTitle="archit937@gmail.com" 
            image = {require("../assets/mosh.jpg")}/>
              </View>
               <View style={styles.container}>
                   <FlatList
                   data = {menuItems}
                   keyExtractor = {menuItem => menuItem.id}
                   ItemSeparatorComponent = {ListItemSeparator}
                   renderItem = {({item}) =>
                    <ListItem 
                     title={item.title}
                    IconComponent = {
                     <Icon 
                      name={item.icon.name} 
                      backgroundColor={item.icon.backgroundColor}/>
                 }   
                  onPress={() => navigation.navigate(item.targetScreen)} 
                 />}
                
                   >
                    </FlatList>
               </View>
               <ListItem 
               title="Logout"
               IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d"/>
               }/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;