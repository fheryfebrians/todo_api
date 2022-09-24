const sql = require('./db');
const moment = require('moment');
let date = moment();

const Activity = function(activity) {
    this.email = activity.email;
    this.title = activity.title;
    this.created_at = date.format();
    this.updated_at = date.format();
};

Activity.create = (newActivity, result) => {
    sql.query(
        "INSERT INTO activities SET ?", newActivity, (err, res) => {
            if(err) {
                console.log("error" +err);
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...newActivity });
        }
    );
};

Activity.findById = (id, result) => {
    sql.query(`SELECT * FROM activities WHERE id = ${id}`, (err, res) => {
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
  
Activity.getAll = (result) => {
    let query = "SELECT * FROM activities";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        result(null, res);
    });
};
  
Activity.updateById = (id, activity, result) => {
    sql.query(
        "UPDATE activities SET email = ?, title = ? WHERE id = ?",
        [activity.email, activity.title, id],
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
    
            result(null, { id: id, email: activity.email, title: activity.title });
        }
    );
};
  
Activity.remove = (id, result) => {
    sql.query("DELETE FROM activities WHERE id = ?", id, (err, res) => {
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
  
module.exports = Activity;