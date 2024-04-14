import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ButtonComponent } from "../components";
import { Button } from 'react-native-paper';


interface Props {
    name?: string;

}

export const CounterScreen = ({ name = "Screen" }: Props) => {

    const [state, setState] = useState(10);

    const setCounter = (value: number) => {
        setState(state + value);
    }

    return (
        <View
            style={style.container}
        >
            <Text numberOfLines={1} style={style.title}>{state}</Text>

            <View>
                {/* <ButtonComponent label="Incrementar"
                    onPress={() => setCounter( + 1)}
                    onLongPress={() => setCounter( 0 )}
                /> */}
                <Button
                    mode="contained"
                    onPress={() => setCounter( + 1)}
                    onLongPress={() => setCounter( 0 )}
                    >
                        Incrementar
                </Button>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 80,
        fontWeight: "300",
        color: "black",
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#443ad1"
    },
    buttonPressed: {
        backgroundColor: "#38319d"
    }
})