import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [turn, setTurn] = useState("X Turn");
  const [fText, setFText] = useState(Array(9).fill(null));
 
 // function to reset the game
  const onReset = () => {
    setTurn("X Turn");
    setFText(Array(9).fill(null));
  }

  // function to handle game logic
  const onGame = (index: number) => {
    if (fText[index] !== null) return;
    const newText = [...fText];
    newText[index] = turn === "X Turn" ? "X" : "O";
    setFText(newText);
    setTurn(turn === "X Turn" ? "O Turn" : "X Turn");
    
  }
  
  // useEffect to check for winning combinations after each move
  useEffect(() => {
    const winningCombos = [
      [0,1,2],[3,4,5],[6,7,8], // row combinations
      [0,3,6],[1,4,7],[2,5,8], // column combinations
      [0,4,8],[2,4,6], // diagonal combinations
    ];
    for (let combo of winningCombos){
      const [a,b,c] = combo;
       if (fText[a] && fText[a] === fText[b] && fText[a] === fText[c]){
        alert(`${fText[a]} is the winner!`);
      }
    }
    if (!fText.includes(null)) {
        alert("It's a draw!");
      }
  }, [fText]);

  return (
    <View style={styles.container}>

      {/* header section*/}
     <View style={styles.turnCon}>
      <Text style={{ fontSize: 18, fontWeight: 'bold',
        color: turn === "X Turn" ? "red": "green",
      }}>{turn}</Text>
      </View>
      
      {/* game section */}
    <View style={styles.gameCon}>
      {/* map through rows */}
      {[0, 1, 2].map(row => ( 
        <View style={{flexDirection: "row"}} key={row}>
          {/* map through columns */}
          {[0, 1, 2].map(col => {
            // calculate index based on row and columns
            const idx = row * 3 + col;
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => onGame(idx)}
                style={{
                  justifyContent:"center",
                  alignItems:"center",
                  width: "30%",
                  height: 100,
                  borderWidth: 2,
                  borderColor: "#fff",
                  borderTopWidth: row === 0 ? 0 : 2,
                  borderLeftWidth: col === 0 ? 0 : 2,
                  borderRightWidth: col === 2 ? 0 : 2,
                  borderBottomWidth: row === 2 ? 0 : 2,
                }}
              >
                <Text style={{ 
                  fontSize: 24,
                  fontWeight: "bold", 
                  color: fText[idx] === "X" ? "red" : fText[idx] === "O" ? "green" : "#fff",
                }}>{fText[idx]}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>

      {/* reset button */}
     <TouchableOpacity onPress={onReset} style={styles.resetBtn}>
      <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Reset</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
  },
  turnCon: {
    width: "60%",
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 4px 6px rgba(255, 255, 255, 0.2)",
  },
  gameCon: {
    width: "80%",
    height: "50%",
    backgroundColor: "#2f3a12",
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    
  },
  resetBtn: {
   width: "40%",
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 4px 6px rgba(255, 255, 255, 0.2)",
  },
  
});