import React from 'react'
import { StyleSheet } from 'react-native'
import {images} from '../Utils/CoinICons'

const styles = StyleSheet.create({
    container:{
        display:'flex',
        marginBottom:20,
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:20,
    },
    upperRow:{
        display:'flex',
        flexDirection:'row',
        marginBottom:15,
    },
    coinSymbol:{
        marginTop:10,
        marginLeft:20,
        marginRight:5,
        fontWeight:'bold',
    },
    coinName:{
        marginTop:10,
        marginLeft:5,
        marginRight:20,
    },
    separator:{
        marginTop:10,
    },
    coinPrice:{
        marginTop:10,
        marginLeft:'auto',
        marginRight:10,
        fontWeight:'bold',
    },
    image:{
        width:35,
        height:35,
    },
    moneySymbol:{
        fontWeight:'bold',
    }


})