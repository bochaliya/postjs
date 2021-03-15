import {type} from './utils';

class Database {
    constructor() {
    }
    createTable(tableName, columns) {
        let key = tableName + "_metadata";
        this[key] = {};
        columns.forEach((c)=> {
            let type = utils.type(c.type);
            this[key][c.column] = type;
        })
        this[tableName] = [];
    }
}

export {Database};