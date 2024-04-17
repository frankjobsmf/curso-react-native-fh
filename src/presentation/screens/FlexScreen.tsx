import { StyleSheet, View } from "react-native"

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.purpleBox }></View>
        <View style={ styles.yellowBox }></View>
        <View style={ styles.blueBox }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#116f00',
        flex: 1,
    },
    purpleBox: {
        backgroundColor: '#5529ad',
        height: 150,
        flex: 1
    },
    yellowBox: {
        backgroundColor: '#f0fa23',
        height: 150,
        flex: 2
    },
    blueBox: {
        backgroundColor: '#2b48d6',
        height: 150,
        flex: 3
    }

})