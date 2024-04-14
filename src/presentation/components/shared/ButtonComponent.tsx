import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void; 
}

export const ButtonComponent = ({ label, onPress, onLongPress }: Props) => {



    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={ () => onLongPress && onLongPress() }
            style={({ pressed }) => [
                style.button,
                (pressed === true) && style.buttonPressed
            ]}
        >
            <Text style={{ color: "#fff" }}>{label}</Text>
        </Pressable>
    )
}


const style = StyleSheet.create({
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