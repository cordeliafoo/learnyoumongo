var mongo = require('mongodb').MongoClient
var argv = process.argv

var firstName = argv[2]
var lastName = argv[3]

var object = {
  firstName: firstName,
  lastName: lastName
}
var jsonObject = JSON.stringify(object)
console.log(jsonObject);

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
  if(err) return console.error(err)
  var collection = db.collection('users')
  collection.insert(jsonObject, function(err, data){
    if (err) return console.error(err)
    console.log(JSON.parse(jsonObject));

  })
  db.close()

})
