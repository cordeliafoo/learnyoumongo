var mongo = require('mongodb').MongoClient
var argv = process.argv
var targetedAge = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
  if(err) return console.error(err)

  var parrots = db.collection('parrots')
  parrots.count(
    {'age':  {
      $gt: +targetedAge
    }
  }, function(err, count){
    if(err) return console.error(err)
    console.log(count);
  }

  )
  db.close()

})
