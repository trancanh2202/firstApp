
import React, {Components} from 'react';
import { AppRegistry, Text, View, Platform } from 'react-native';

const apiGetFood = 'http://resources.70pixels.com:3000/tasks/';
async function getFoodsFormServer() {
    try{
        let response = await fetch(apiGetFood);
        let responseJson = await response.json();
        //console.log(responseJson)
        return responseJson; // list of food
    } catch(error){
        console.error(error)
    }
}

// const apiInsertFood = 'http://localhost:8080/links/';
// async function insertDetail(params){
//     try {
//         let reponse = await fetch(apiInsertFood, {
//             method: 'POST',
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(params)
//         });
//         let reponseJson = await reponse.json();
//         return reponseJson.data;
//     }catch {
//         console.error(error)
//     }
// }

export { getFoodsFormServer }
//export { insertDetail }