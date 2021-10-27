const data = require('./data/todo.json');
const Query = {
    Todos: ()=> data.data
}
module.exports = {Query}