import { StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.yellowBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
        <View style={ [ styles.box, styles.blueBox2] }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cacaca',
        justifyContent: 'space-between', //horizontal
        alignItems: 'stretch', //vertical
        flexDirection: 'column',
        flexWrap: 'wrap',
        // gap: 10
        // columnGap: 15
    },
    box: {
        // flex: 1
        width: 100,
        height: 100
    },
    purpleBox: {
        backgroundColor: '#7346cd',
    },
    yellowBox: {
        backgroundColor: '#5319b0',
        // alignSelf: 'flex-end' //se utiliza para un elemento en caso de ser necesario
    },
    blueBox: {
        backgroundColor: '#3b2887',
        // alignSelf: 'center'
    },
    blueBox2: {
        backgroundColor: '#211848',
        // alignSelf: 'center'
    }

})