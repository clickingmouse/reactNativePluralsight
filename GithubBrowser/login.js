'use strict';

import React, { Component } from 'react';
//import { Text } from 'react-native';

//var Login = React.createClass({

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Imageg,
} from 'react-native';


export default class Login extends Component{	
render (){
return (
        <View style={styles.container}>
<Image style={styles.logo} source={require('image!octocat')} />

        <Text> LOGIN</Text></View>	
       );
    }
}



var styles = StyleSheet.create({
	container:{
		backgroundColor:"yellow",
		flex:1
	},
	logo: {
		width : 66,
		height: 55
	}

})

