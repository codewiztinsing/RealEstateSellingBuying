import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default Filters = ({ data, onValueChange }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
  
    return (
      <View style={{ flexDirection: 'row',justifyContent:'space-around',marginBottom:10 }}>
        {data.map((x, i) => (
          <FilterButton
            text={x.title}
            id={i}
            key = {Math.random() - i}
            selectedIndex={selectedIndex}
            callback={(id) => {
              setSelectedIndex(id);
              if (onValueChange) {
                onValueChange(id);
              }
            }}
          />
        ))}
      </View>
    );
  };
  
  const FilterButton = ({ callback, text, id, selectedIndex }) => {
    const clicked = selectedIndex === id;
    return (
      <TouchableOpacity
        style={[
          {  
          width:80,
          height:30,
          borderRadius:10,
          justifyContent:'center',
          alignItems:"center",
          borderColor: 'black', 
          borderWidth: 1, 
          // padding: 5,
          marginRight:15,
         
        },
          { backgroundColor: clicked ? 'pink' : 'white' },
          { borderColor: clicked ? 'pink' : 'white' }
        ]}
        onPress={() => {
          callback(id);
        }}>
        <Text style={{ color: clicked ? 'white' : 'black' }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };


