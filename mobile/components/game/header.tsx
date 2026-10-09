
import {View, Text, StyleSheet ,Pressable} from 'react-native'
import MenuList from './MenuList'
import { useEffect, useState } from 'react'

const Header = ({wrongFlips,  newEasyGame,newHardGame, estimatedFlips, setModalVisible}) => {
   
   const [danger , setDanger] = useState(false);
   const menu = [
      {
         text:"4x4",
         method: newEasyGame,
         estimatedFlipsCount : 8
      },
      {
         text:"6x6",
         method: newHardGame,
         estimatedFlipsCount : 18
      },
   ]
   
   useEffect(() => {
      
      if(wrongFlips > 0 && wrongFlips == (estimatedFlips - 1))
         
         setDanger(true);
         
      if(wrongFlips == 0)
         setDanger(false);
   }, [wrongFlips]);
  return (  
    <View style={styles.container}>
      <Text style={styles.title} >FLIPPY</Text>
      
      <View style={{flexDirection : "row", justifyContent : "space-between"}}>
        
        {/*left*/}
        <View>
          
          <View style={styles.controlUp}>
            <Text style={styles.wrongFlips}>wrong tests: {wrongFlips}
            </Text>
          </View>
          <View style={[styles.controlUp, {marginTop:3}]}>

            <MenuList menu={menu} />

          </View>

        </View>

        {/*right*/}
        <View>
          <View style={[styles.controlUp, {marginRight:6}]}>
             <Pressable onPress={() => setModalVisible(true)}>
                <Text style={[styles.wrongFlips , {color: danger ? "#aa0000" : "#229911"}]}>estimated flips: {estimatedFlips}</Text>
             </Pressable>
            
          </View>
        </View>

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
    
    fontSize:25,
    fontWeight:"bold",
    color:"#505c9a",
    alignSelf: "center",
    paddingBottom:30,
    textShadowColor: "#ddd", 
    textShadowOffset: {width: 3, height: 3 },
    letterSpacing:-1
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