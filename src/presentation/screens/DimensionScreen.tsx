import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native"

export const DimensionScreen = () => {

    const { height, width } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5

                }}></View>
            </View>
            
            <Text style={ styles.title }>w: {width}, h {height}</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        backgroundColor: 'red',
        height: 400
    },
    purpleBox: {
        backgroundColor: '#6b29d5',
        height: '50%',
        width: '50%'
    },
    greenBox: {
        backgroundColor: '#03b61b'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
})