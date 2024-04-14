import { View, Text, StyleSheet } from "react-native";

interface Props {
    name?: string;

}

export const HelloWorldScreen = ({name = "Francisco Uribe"}: Props) => {
  return (
    <View
        style={ style.container }
    >
        <Text numberOfLines={1} style={style.title}>Hello {name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "yellow"
    },
    title: {
        fontSize: 45,
        textAlign: "center",
        color: "black",
        padding: 20
    }
})