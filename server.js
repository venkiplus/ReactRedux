var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/react';

// Use connect method to connect to the server
MongoClient.connect(url,{ keepAlive: 30000, connectTimeoutMS: 30000, }, function(err, db) {
  assert.equal(null, err);
  var myobj = [
    { name: 'John', address: 'Highway 71'}
  ];
  console.log("Connected successfully to server");
  db.collection('users').insert(myobj, function(err, res){
    if(err) throw err;
    console.log("number of records inserted:" + res.insertedCount);
  })
  var query = {name: /^S/}
  db.collection('users').find(query).toArray(function(err, result){
    console.log(result);
  });
  db.close();
});
