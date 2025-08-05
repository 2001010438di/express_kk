/// 8-4  第8回レポート で追加 ///
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://yesno.wtf/api');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('API取得に失敗しました');
  }
});

module.exports = router;

/// 8-4  第8回レポート で追加 ///
//var express= require('express');
//var router= express.Router();
//const request= require('request');

//router.get('/', async(req, res) =>{
 //request('https://yesno.wtf/api', function(error, response, 
//body) {
  //if(!error&& response.statusCode == 200) {
    //const data= JSON.parse(body);
    //res.json(data);
   //}
  //});
 //})

 //module.exports = router;