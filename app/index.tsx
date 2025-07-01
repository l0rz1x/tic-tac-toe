import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
     <View style={styles.turnCon}><Text style={{ fontSize: 18, fontWeight: 'bold'}}>X Turn</Text></View>

     <View style={styles.gameCon}>
      <View style={{flexDirection: "row"}}>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0,borderLeftWidth: 0}}></TouchableOpacity>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0,}}></TouchableOpacity>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0, borderRightWidth: 0}}></TouchableOpacity>
      </View>
      <View style={{flexDirection: "row"}}>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0,borderLeftWidth: 0}}></TouchableOpacity>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0,}}></TouchableOpacity>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0, borderRightWidth: 0}}></TouchableOpacity>
      </View>
      <View style={{flexDirection: "row"}}>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0,borderLeftWidth: 0,borderBottomWidth: 0}}></TouchableOpacity>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0,borderBottomWidth: 0}}></TouchableOpacity>
      <TouchableOpacity style={{ width: 100,height: 100, borderWidth: 2,borderColor: "#fff",borderTopWidth: 0, borderRightWidth: 0,borderBottomWidth: 0}}></TouchableOpacity>
      </View>
     </View>


     <TouchableOpacity style={styles.resetBtn}>
     
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
  },
  turnCon: {
    width: "60%",
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameCon: {
   width: "80%",
    height: "50%",
    backgroundColor: "#2f3a12",
    borderRadius: 10,
    borderWidth: 5,
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
  },
  
});