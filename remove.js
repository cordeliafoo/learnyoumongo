var mongo = require('mongodb').MongoClient
var argv = process.argv
var collectionName = argv[3]
var _id = argv[4]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
  if(err) return console.error(err)
  var collection = db.collection(collectionName)
  collection.remove({
    '_id': _id
  }, function(err, data){
    if(err) return console.error(err)
    console.log(data);
  })
  db.close()
})
