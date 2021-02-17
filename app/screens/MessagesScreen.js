import React, {useState} from 'react';
import { FlatList, View } from 'react-native';


import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: require('../assets/mosh.jpg')
    },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: require('../assets/mosh.jpg')
    }
]


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)


    const handleDelete = message => {
       setMessages(messages.filter((m) => m.id !== message.id))
    }

    return (
    <Screen>
    <FlatList 
    data={messages}
    keyExtractor = {message => message.id.toString()}
    renderItem = {({item}) => (
        <ListItem
        title={item.title}
        subTitle = {item.description}
        image = {item.image}
        onPress= {() => console.log("") }
        renderRightAction = {()=> <ListItemDeleteAction onPress={() => handleDelete(item)}/> }
         />
    ) }
    ItemSeparatorComponent = {ListItemSeparator}
    refreshing={refreshing}
    onRefresh = {()=> {
        setMessages([
             { id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
             }
        ])
    }}
      />
    </Screen>
    );
}


export default MessagesScreen;