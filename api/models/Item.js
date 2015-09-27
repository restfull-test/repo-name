/**
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
    "key": {
        "key": "key",
        "type": "string",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": false,
        "required": true,
        "collection": false
    },
    "key2": {
        "key": "key2",
        "type": "string",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": true,
        "required": false,
        "collection": false
    }
}

};

