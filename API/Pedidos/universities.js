const getCollection = require("../connectDB/getCollection");
const getDocumentFromCollection = require("../connectDB/getDocumentFromCollection");

const COLLECTION_NAME = "universities";

module.exports = {
    get: async (id) =>  {
        if (!id) {
            throw new Error("An ID must be provided");
        }

        const coll = getCollection(COLLECTION_NAME);
        const docRef = getDocumentFromCollection(coll, id);

        const doc = await docRef.get();
        const data = doc.data();

        if (!data) {
            return false;
        }

        return { ...data, id: doc.id }
    },
    getAll: async () => {
        const coll = getCollection(COLLECTION_NAME);
        const query = await coll.get();

        return query.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    }
}