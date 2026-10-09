

import { MenuProvider  } from'react-native-popup-menu';

import { 
  StyleSheet, 
  TextInput,
  TouchableOpacity,
  View,
  Text,

  
} from 'react-native';
import {useEffect, useState} from 'react';
import {getShuffledEasyImages, getShuffledHardImages, createEasyBoard, createHardBoard} from "@/constants/data";

import Header from "@/components/game/header";
import GameBoard from "@/components/game/GameBoard";
import { Modal } from 'react-native';

export default function HomeScreen() {
   
  const [reset, setReset] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);
  
  const [gameOverModalVisible,setGameOverModalVisible] = useState(false);

  const [level, setLevel] = useState("easy");
  const [wrongFlips, setWrongFlips] = useState(0);
  const [estimatedFlips, setEstimatedFlips] = useState('8');
  const [gameFinished , setGameFinished] = useState(false);
  const [shuffeledImages,setShuffeledImages] = useState(()=> level=="easy" ? getShuffledEasyImages() : getShuffledHardImages() );
  
  const [imagesBoard, setImagesBoard] = useState(()=> level=="easy" ? createEasyBoard() : createHardBoard());

  const newEasyGame = () => {
    setLevel("easy");
    setShuffeledImages(()=>getShuffledEasyImages());
    setWrongFlips(0); 
    setImagesBoard(()=>createEasyBoard())
    setGameFinished(false);
    setEstimatedFlips("8");
    
    setReset(false);
  }
  
  const newHardGame = () => {
    setLevel("hard");
    setShuffeledImages(() => getShuffledHardImages());
    setWrongFlips(0);
    setImagesBoard(() => createHardBoard())
    setGameFinished(false);
    setEstimatedFlips("18");
    
    setReset(false);
    
  }
  
  useEffect(()=>{
   setTimeout(() => {
      newEasyGame();
   }, 4000);
  },[gameFinished]);

  useEffect(()=> {
    if(wrongFlips > 0) {
      if(wrongFlips >= Number(estimatedFlips) ) {
         
      setGameOverModalVisible(true);

      }
    }

  },[wrongFlips]);
  
  
  const handleEstimatedChange = (text) => {
   
   setEstimatedFlips("")
   
   if(text) {
      setError(false);  
      const cleaned = text.replace(/[^0-9]/g, '');
      if(cleaned?.length < 3 && Number(cleaned) > wrongFlips)
         setEstimatedFlips(cleaned);
      
   } 

 };

  return (
   <MenuProvider >
    <View style={{backgroundColor:"#555", height:"100vh"}}>
      <Header 
        wrongFlips={wrongFlips} 
        newEasyGame={newEasyGame} 
        newHardGame={newHardGame}
        estimatedFlips = {estimatedFlips}        
        setModalVisible={setModalVisible}
      />

      <GameBoard 
        level={level}
        setWrongFlips={setWrongFlips} 
        shuffeledImages={shuffeledImages}
        setShuffeledImages={setShuffeledImages}
        imagesBoard={imagesBoard}
        setImagesBoard={setImagesBoard}
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
      />
    </View>
    
     <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible (false) }>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: "#d2effa"}]}>
            <Text style={[styles.modalTitle, { color: "#444" }]}>What Number of Estimated Flips You Need ?</Text>
            
            <TextInput
              placeholder="Estimated Flips..."
              placeholderTextColor={"#777"}
              style={[styles.input, { borderColor: error ? "#cc2222" : "#444", color: "#333"}]}
              value={estimatedFlips}
              onChangeText={handleEstimatedChange}
              maxLength={2}
              
            />

            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => { estimatedFlips ? setModalVisible(false) : setError(true)}} style={styles.modalBtn}>
                {<Text style={{ color: '#fff', borderWidth:1 , borderColor: "#999", paddingHorizontal:16, paddingTop:2  , paddingBottom:3, borderRadius:4, backgroundColor: "#166", fontSize:20 , fontWeight: '600' }}>OK</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      
      {/* game over */}
      <Modal animationType="fade" transparent visible={gameOverModalVisible} onRequestClose={() => setGameOverModalVisible(false) }>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end'}}>
          <View style={[styles.modalContent, { backgroundColor: "#8da075", paddingBottom:450}]}>
            <Text style={[styles.modalTitle, { color: "#555", fontSize:30, textAlign:'center', textShadowColor: "#888", textShadowOffset: {width: 3, height: 3 }  }]}>Game Over</Text>
            <Text style={[styles.modalTitle, { color: "#666" }]}>wrong test : {wrongFlips}</Text>

            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => {setGameOverModalVisible(false); newEasyGame()}} style={styles.modalBtn}>
              {<Text style={{ color: '#fff', borderWidth:1 , borderColor: "#777", paddingHorizontal:16, paddingTop:2  , paddingBottom:4, borderRadius:4, backgroundColor: "#77a", fontSize:20 , fontWeight: '600' }}>Start again</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  boardContainer : {
    flex:4,
    width:10,
    alignItems: "center",
    backgroundColor: "#0f0",
    
  },
  
  
  modalOverlay: {
   flex: 1,
   backgroundColor: 'rgba(0,0,0,0.5)',
   justifyContent: 'flex-end',
 },
 modalContent: {
   borderTopLeftRadius: 8,
   borderTopRightRadius: 8,
   padding: 24,
   paddingTop:320,
   paddingBottom: 80,
   // flex:1
 },
 modalTitle: {
   fontSize: 18,
   fontWeight: '700',
   marginBottom: 16,
 },
 input: {
   borderWidth: 1,
   borderRadius: 10,
   height: 48,
   paddingHorizontal: 14,
   marginBottom: 12,
   fontSize: 14,
   outline : "#"
 },
 textArea: {
   height: 100,
   paddingTop: 12,
   textAlignVertical: 'top',
 },
 modalActions: {
   flexDirection: 'row',
   justifyContent: 'center',
   gap: 12,
   marginTop: 12,
 },
 modalBtn: {
   height: 44,
   paddingHorizontal: 20,
   borderRadius: 10,
   alignItems: 'center',
   justifyContent: 'center',
   minWidth: 100,
 },
  
});

