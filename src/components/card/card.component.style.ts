import { StyleSheet,Dimensions } from "react-native";

export const CardStyles = StyleSheet.create({
    containerMain:{
        backgroundColor:'#E7E7E7',
        borderRadius:5,
        margin:'2%',
        padding:'1%',
        flexDirection:'row',

    },

    containerImage:{
        width:'40%',
    },

    image:{
        borderRadius:5,
        width:'100%',
        height:Dimensions.get('window').width / 3
    },

    containerInfos:{
        width:'57%',
        marginLeft:'2%',
        justifyContent:'space-between'
    },

    title:{
        color:'#191919',
        fontSize:20,
        fontWeight:'600'
    },

    titlePrice:{
        color:'#494949',
        fontWeight:'600',
        fontSize:18
    },
    rowInfos:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})