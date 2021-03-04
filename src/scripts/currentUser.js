import React, {useState, useEffect} from 'react';
import FirebaseConfig from "./FirebaseConfig";
const [user, setUser] = useState('');

const authListener =() =>{
    FirebaseConfig.auth().onAuthStateChanged((user)=>{
        if(user){
            setUser(user.uid);
        }else {
            setUser('');
        }})}
useEffect(()=>{
    authListener();
}, []);

export default authListener()