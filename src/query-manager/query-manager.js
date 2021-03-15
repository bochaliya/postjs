import selectQueryManager from './select-query';
import deleteQueryManager from './delete-query';
import updateQueryManager from './update-query';

function query(queryString, db) {
    let queryArray = queryString.split(' ');
    if(queryArray.length == 0) {
        return null;
    }
    if(queryArray[0] == 'select') {
        selectQueryManager(queryArray, db);
    }
    if(queryArray[0] == 'delete') {
        deleteQueryManager(queryArray, db);
    }
    if(queryArray[0] == 'update') {
        updateQueryManager(queryArray, db);
    }
}