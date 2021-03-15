import { Database } from '../../db-classes/db-class.js';

function tableCreation(){
    console.log('begin;');
    let db = new Database();
    console.log('db creation done');
    db.createTable('employees', [{column: id, type: uuid}, {column: name, type: text}, {column: age, type: bigint}]);
    console.log('table creation done');
};

tableCreation();