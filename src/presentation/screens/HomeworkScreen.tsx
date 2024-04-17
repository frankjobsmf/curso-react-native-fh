import { StyleSheet, View } from 'react-native'

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={ [ styles.box, styles.purpleBox] }></View>
        <View style={ [ styles.box, styles.orangeBox] }></View>
        <View style={ [ styles.box, styles.blueBox] }></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#264c8c',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 7,
        borderColor: '#fff'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        alignSelf: 'flex-end'
    },
    orangeBox: {
        backgroundColor: '#f67504',
        alignSelf: 'center'

    },
    blueBox: {
        backgroundColor: '#2918c3',
        // width: '100%'
        alignSelf: 'flex-start'
    }

})

