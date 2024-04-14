import { StyleSheet, Text, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.greenBox }></View>
        <View style={ styles.yellowBox }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e2394',
        justifyContent: 'center',
        alignItems: 'center'
    },
    greenBox: {
        backgroundColor: '#2ebf57',
        borderWidth: 10,
        borderColor: 'white',
        height: 150,
        width: 150,
        top: 100,
        right: 50,
        position: 'relative'
    },
    yellowBox: {
        backgroundColor: '#d4e743',
        borderWidth: 10,
        borderColor: 'white',
        height: 150,
        width: 150,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
})