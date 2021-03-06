import { FlatList, StyleSheet } from 'react-native'
import React from 'react';

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import navigationTheme from '../navigation/navigationTheme';
const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require("../assets/jacket.jpg")
    },
     {
        id: 2,
        title: 'Couch in great conditions',
        price: 200,
        image: require("../assets/couch.jpg")
    }

]


function ListingsScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data= {listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item})=>
                <Card 
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
                onPress={()=> navigation.navigate(routes.LISTING_DETAILS,item)}/>

            }
            >
            </FlatList>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;