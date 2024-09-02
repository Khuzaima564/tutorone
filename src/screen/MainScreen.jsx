import { Button, Icon, Text, View } from "native-base";
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function MainScreen() {

const SideButtons = () => {

    return(
        <View style={styles.sidbtn}>
            <TouchableOpacity>
                <Icon name={name} size={20} color="#ffff"/>
            </TouchableOpacity>
        </View>
    )
} 


return(
    <View>
    <SideButtons name="Heart"/>
    </View>
)

    } 
   const styles = StyleSheet.create({
    sidbtn : {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100
    }
   })