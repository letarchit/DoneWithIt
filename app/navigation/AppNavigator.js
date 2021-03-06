import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ListingScreen from '../screens/ListingsScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccoutScreen from '../screens/AccountScreen'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} 
        options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>}}/>

        <Tab.Screen name="ListingEdit" component={ListingEditScreen}
        options={({navigation}) => ({
            tabBarButton: () => 
                <NewListingButton 
                onPress={() => navigation.navigate("ListingEdit")}
                />
            } )}
            />
        <Tab.Screen 
        name="Accounts" 
        component={AccountNavigator}
        options={{tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color}/>}}/>

    </Tab.Navigator>
)

export default AppNavigator;