import { StyleSheet, Text } from "react-native"
import { View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={ style.container }>
      {/* <Text style={ style.title }>Box object model</Text> */}
      <View style={ style.purpleBox }>
        <Text style={{ color: 'white' }}>Hola Mundo</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 30,
    padding: 5,
    borderWidth: 10,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  purpleBox: {
    height: 30,
    marginHorizontal: 30,
    marginVertical: 50,
    padding: 5,
    backgroundColor: 'purple'
  }
})