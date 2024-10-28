import {View, Text, StyleSheet ,Pressable} from 'react-native'

const Header = ({wrongFlips, newGame}) => {
  return (  
    <View style={styles.container}>
      <Text style={styles.title} >Flip-Game</Text>
      <View style={styles.control}>
        <Text style={styles.wrongFlips}>wrong tests: {wrongFlips}
        </Text>
        <Pressable style={styles.reset} onPress={()=>newGame()}>
          <Text style={styles.resetText}>new game</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    paddingTop:30,
    paddingBottom:30,
    backgroundColor: "#eeeeee",
    borderBottomWidth:2,
    borderBottomColor:"#777",
  },
  title : {
    
    fontSize:20,
    fontWeight:"bold",
    color:"#555",
    alignSelf: "center",
    paddingBottom:30,
  },
  control: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  wrongFlips : {
    paddingLeft: 5,
    fontWeight:"bold",
    fontSize:15,
    color:"#aa0000",
  },
  reset: {
    paddingRight: 16,
    
  },
  resetText: {
    fontSize:16,
    fontWeight:"bold",
    letterSpacing:1,
    textTransform:"capitalize",
    color:"#5599ff",
  }
})
export default Header