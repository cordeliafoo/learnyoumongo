var mongo = require('mongodb').MongoClient
var argv = process.argv

var databaseName = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
  if(err) return console.error(err)
  var collection = db.collection('users')
  collection.update(
    {
      'username' : 'tinatime'
    },
    {
      $set: {'age': 40},
      $currentDate: {lastModified: true}
    }, function(err, data){
      if(err) return console.error(err)
      console.log(databaseName.age);
    }
  )
  db.close()
})
