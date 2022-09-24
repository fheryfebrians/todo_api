const sql = require('./db');
const moment = require('moment');
let date = moment();

const Todo = function(todo) {
    this.activity_group_id = todo.activity_group_id;
    this.title = todo.title;
    this.is_active =  true;
    this.priority = "very-high";
    this.created_at = date.format();
    this.updated_at = date.format();
};

Todo.create = (newTodo, result) => {
    sql.query(
        "INSERT INTO todo SET ?", newTodo, (err, res) => {
            if(err) {
                console.log("error" +err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newTodo });
        }
    );
};

Todo.findById = (id, result) => {
    sql.query(`SELECT * FROM todo WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res[0]);
            return;
        }
    
        result({ kind: "not_found" }, null);
    });
};
  
Todo.getAll = (result) => {
    let query = "SELECT * FROM todo";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        result(null, res);
    });
};
  
Todo.updateById = (id, todo, result) => {
    sql.query(
        "UPDATE todo SET activity_group_id = ?, title = ? WHERE id = ?",
        [todo.activity_group_id, todo.title, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
    
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
    
            result(null, { id: id, activity_group_id: todo.activity_group_id, title: todo.title });
        }
    );
};
  
Todo.remove = (id, result) => {
    sql.query("DELETE FROM todo WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
    
        result(null, res);
    });
};
  
module.exports = Todo;