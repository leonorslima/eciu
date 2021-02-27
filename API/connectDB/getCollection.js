const getFirestore = require("../connectDB/getFirestore")

module.exports = collectionName =>
    getFirestore().collection(collectionName)