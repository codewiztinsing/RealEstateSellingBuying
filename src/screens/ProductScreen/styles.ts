import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
      margin:5,
      flex:1

    },
    share:{
  
    },
    favorite:{


    },
    showrelatedbtn:{
      width:120,
      height:35,
      marginBottom:20,
      borderRadius:20,
      backgroundColor:"pink",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
    },

    topBar:{
      flexDirection:"row",
      justifyContent:"space-around"
    },
    orderText:{},
    orderButton:{
      width:480,
      height:25,
      borderRadius:20,
      backgroundColor:"pink",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
    },
    info:{
      flexDirection :"row",
      justifyContent:"space-between"

    },
    right:{

    },
    left: {

    },

    title:{
      fontSize:22,
      fontWeight:"bold",
      fontFamily:"sans serif",
      color:"black"
        
    },

    bottomText:{
      fontSize:16,

      fontFamily:"sans serif",
      color:"black"
        
    },
 
      description:{
       
        fontSize:18,
        color:"#696969",
        lineHeight:20,
        marginVertical:20
        
      },
      price:{
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"sans serif",
        color:"black"

      }
})


export default styles;

