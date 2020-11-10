const express = require('express');
const app = express()
app.set('view engine', 'ejs');


app.get('/informations', get_informations);

function get_informations(){
    var url1 = 'https://get_email/';
    var url2 = 'https://get_profile_picture/';
    query_string = '?id=8367839674';
    var response1 = UrlFetchApp.fetch((url1+query_string), {'muteHttpExceptions': true});
    var response2 = UrlFetchApp.fetch((url2+query_string), {'muteHttpExceptions': true});
    var json1 = response1.getContentText();
    var json2 = response2.getContentText();
    var data1 = JSON.parse(json1);
    var data2 = JSON.parse(json2)
    var informations = {"email":data1.email,"profil_picture":data2.profil_picture}
    return informations
};


