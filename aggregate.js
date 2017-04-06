// calculate the average price for all documents
// in the prices collection

var mongo = require('mongodb').MongoClient
var argv = process.argv
var sizeToMatch = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  var collection = db.collection('prices')

  collection.aggregate([
    {$match: {size: sizeToMatch}},
    {$group: {
      _id: 'total',
      total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function (err, results) {
    if (err) return console.error(err)
    var roundedResult = Number(results[0].total).toFixed(2)
    console.log(roundedResult)
  })
  db.close()
})
