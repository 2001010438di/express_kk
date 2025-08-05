/// 8-4 でファイル追加 ///
const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors'); // corsミドルウェアを追加 14-2

// corsミドルウェアを使用 14-2
router.use(cors());

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cat image:', error);
    res.status(500).send('猫画像の取得に失敗しました');
  }
});

module.exports = router;

/// 8-4 でファイル追加 ///
//var express= require('express');
//var router = express.Router();
//const request = require('request');
//const cors = require('cors'); // corsミドルウェアを追加 14-2

// corsミドルウェアを使用 14-2
//router.use(cors());

//router.get('/', async(req, res) =>{
 //request('https://api.thecatapi.com/v1/images/search', function(error, response, 
//body) {
  //if(!error&& response.statusCode == 200) {
    //const data= JSON.parse(body);
    //res.json(data);
   //}
  //});
 //})

 //module.exports = router;