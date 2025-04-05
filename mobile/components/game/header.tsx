import {View, Text, StyleSheet ,Pressable} from 'react-native'
import MenuList from './MenuList'

const Header = ({wrongFlips,  newEasyGame,newHardGame}) => {
   
   const menu = [
      {
         text:"4x4",
         method: newEasyGame
      },
      {
         text:"6x6",
         method: newHardGame
      },
   ]
  return (  
    <View style={styles.container}>
      <Text style={styles.title} >Flip-Game</Text>
      <View style={styles.controlUp}>
        <Text style={styles.wrongFlips}>wrong tests: {wrongFlips}
        </Text>
      </View>
      <View style={[styles.controlUp, {marginTop:3}]}>
        
        <MenuList menu={menu} />
        
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    paddingTop:12,
    paddingBottom:12,
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
  controlUp: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingBottom:2,
    paddingLeft: 16,
    // borderBottomWidth:15,
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
  resetEasy: {
    paddingLeft: 16,
    
  },
  resetHard: {
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