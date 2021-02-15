import React, {useState} from 'react';
import { TouchableWithoutFeedback,FlatList, View, Modal, Button,StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import Screen from './Screen'
import AppText from './AppText'
import defaultStyles from '../config/styles'
import PickerItem from './PickerItem'
import colors from '../config/colors'


function AppPicker({icon, placeholder, items, selectedItem, onSelectItem}) {
   
    const [modalVisible, setModalVisible] = useState(false);
   
    return (
    <>
    <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
       <View style={styles.container}>
           {icon && (
           <MaterialCommunityIcons 
           name={icon} 
           size={20} 
           color={defaultStyles.colors.medium} 
           style={styles.icon}
           />
           )
           }
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
           <MaterialCommunityIcons 
           name="chevron-down"
           size={20} 
           color={defaultStyles.colors.medium} 
              />
       </View>
       </TouchableWithoutFeedback>
       <Modal visible={modalVisible} animationType="slide">
          <Screen>
           <Button title="Close" onPress={() => setModalVisible(false)}/>
           <FlatList 
           data={items}
           keyExtractor={item => item.value.toString()}
           renderItem={({ item }) => (
               <PickerItem 
               label={item.label}
               onPress={() => {
                   setModalVisible(false);
                   onSelectItem(item)
               }}
               />
           )}/>
         </Screen>
        </Modal>
     
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 20
    },
    textInput: {
       
    },
    icon: {
        marginRight: 10,
    },
    text: {
      flex: 1  
    }

})

export default AppPicker;