var express = require('express');
var mysql = require('mysql');
var fs = require('fs');
var shell = require('shelljs');

var connection = mysql.createConnection({
    host     : '54.213.230.201',
    socketPath: '/var/run/mysqld/mysqld.sock',
    user     : 'boingo',
    password : 'boingo@123',
    database : 'boingo'
});
var app = express();


app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods',"GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers',"Content-Type");
    next();
});

app.listen(3030);

app.get('/boingoAPI/login', function(req,res, next){

    var email = req.query.email;
    var password = req.query.password;
    connection.query("SELECT email from users where email= ?",[email] , function (err, rows, fields) {
        if(rows[0]){
            connection.query("SELECT password from users where email= ?",[rows[0].email] , function (err, rows, fields) {
                if(rows[0].password === password){
                    res.end(JSON.stringify({login:true}));
                }
                else{
                    res.end(JSON.stringify({login:false}));
                }
            });
        }
        else{
            res.end(JSON.stringify({login:false}));
        }
    });
});

app.get('/boingoAPI/botUpdate', function(req, res, next){
    var counter = 0;

    //Updating stories.md file
    const storesFile = "../boingoChatBotCore/data/stories.md";
    var storiesContent = fs.readFileSync(storesFile);
    var deployData = JSON.parse(req.query.deployData);
    for(var g in Object.keys(deployData)){
        storiesContent += "\n\n## "+ Object.keys(deployData)[g] + "\n* " + Object.keys(deployData)[g];
        for(var h in deployData[Object.keys(deployData)[g]]){
            storiesContent+= "\n  - " + deployData[Object.keys(deployData)[g]][h].followupIntentChange;
        }
    }
    fs.writeFile(storesFile,storiesContent, function(){counter+=1;});

    //Updating nlu_train.json file
    const nluTrain= "../rasa-nlu-trainer/src/state/testData.json";
    var contents = fs.readFileSync(nluTrain);
    var newTrainData = JSON.parse(contents);
    const botNLUTrain= "../boingoChatBotCore/data/nlu_train.json";
    var botContents = fs.readFileSync(botNLUTrain);
    var botTrainData = JSON.parse(botContents);
    for(var a in newTrainData.rasa_nlu_data.common_examples){
        botTrainData.rasa_nlu_data.common_examples.push(newTrainData.rasa_nlu_data.common_examples[a]);
    }
    var newTrainDataToBeWritten = JSON.stringify(botTrainData);
    fs.writeFile(botNLUTrain,newTrainDataToBeWritten, function(){counter+=1;});

    //Extraction of entities in new intends
    var intents = [];
    var intentsWithEntities = {};
    for (var i in newTrainData.rasa_nlu_data.common_examples){
        if(!intents.includes(newTrainData.rasa_nlu_data.common_examples[i].intent)){
            intents.push(newTrainData.rasa_nlu_data.common_examples[i].intent);
            var entities=[];
            for( var j in newTrainData.rasa_nlu_data.common_examples[i].entities){
                var temp = {};
                temp[newTrainData.rasa_nlu_data.common_examples[i].entities[j].entity]= "text";
                entities.push(temp);
            }
            intentsWithEntities[newTrainData.rasa_nlu_data.common_examples[i].intent] = entities
        }

    }

    //Updating domain.yml file
    const botDomain= "../boingoChatBotCore/domain.yml";
    var botDomianContents = fs.readFileSync(botDomain);
    var domainContentsString = botDomianContents.toString();
    var domainContents = domainContentsString.split("\n\n");
    var intentsArray = domainContents[1].split("\n");
    for( var k =1; k < intentsArray.length; k++){
        intentsArray[k] = intentsArray[k].slice(4);
    }
    for(var l in intents){
        if(!intentsArray.includes(intents[l])){
            domainContents[1] += "\n  - "+intents[l];
            for(var m in intentsWithEntities[intents[l]]){
                domainContents[2] += "\n  - "+Object.keys(intentsWithEntities[intents[l]][m]);
                domainContents[0] += "\n  "+Object.keys(intentsWithEntities[intents[l]][m]) + ":\n    type: "+intentsWithEntities[intents[l]][m][Object.keys(intentsWithEntities[intents[l]][m])];
            }
        }
    }
    var templateArray = domainContents[3].split("\n");
    for( var d =1; d < templateArray.length; d++){
        templateArray[d] = templateArray[d].slice(3);
    }

    for(var b in Object.keys(deployData)){
        for(var c in deployData[Object.keys(deployData)[b]]){
            if(!templateArray.includes(deployData[Object.keys(deployData)[b]][c].followupIntentChange)){
                domainContents[3]+= "\n - " + deployData[Object.keys(deployData)[b]][c].followupIntentChange;
                domainContents[4]+= "  " + deployData[Object.keys(deployData)[b]][c].followupIntentChange + ":\n  - text: \"" + deployData[Object.keys(deployData)[b]][c].followupResponseIntentChange + "\"\n";
            }
        }
    }

    var updatedDomain = domainContents[0] + "\n\n" + domainContents[1] + "\n\n" + domainContents[2] + "\n\n" + domainContents[3] + "\n\n" + domainContents[4];
    fs.writeFile(botDomain,updatedDomain, function(){counter+=1;});

    if(newTrainData.rasa_nlu_data.common_examples && deployData){
        shell.exec("nohup ./test &> /dev/null &",{async:true, silent:true});
        if(counter===3){
            return res.json({success:true});
        }
        else {
            return res.json({success:false});
        }
    }
});