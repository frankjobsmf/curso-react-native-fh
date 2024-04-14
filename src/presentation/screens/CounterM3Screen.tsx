import { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { globalStyles } from "../theme/global.style";
import { FAB } from "react-native-paper";
import Icon from  "react-native-vector-icons/Ionicons";


interface Props {
    name?: string;

}

export const CounterM3Screen = ({ name = "Screen" }: Props) => {

    const [state, setState] = useState(10);



    return (
        <View
            style={globalStyles.container}
        >
            <Text numberOfLines={1} style={globalStyles.title}>{state}</Text>

            <Icon name="accessibility-outline" size={ 25 } />

            <FAB
                icon="add"
                // label="Aumento"
                style={styles.fab}
                onPress={() => setState(state + 1)}
                onLongPress={() => setState(0)}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 20 : 0,
    },
  })