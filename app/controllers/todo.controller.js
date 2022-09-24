const Todo = require('../models/todo.model');

exports.create = (req, res) => {
    const { activity_group_id, title } = req.body;

    if(!activity_group_id || !title) {
        res.status(400).send({
            message: "can not be empty"
        });
        return;
    }

    const todo = new Todo({
        activity_group_id: activity_group_id,
        title: title
    });

    Todo.create(todo, (err, data) => {
        if(err) {
            res.status(500)
                .send({
                    message: err.message || "ERROR"
                });
        } else {
            res.send({
                status: "Success",
                message: "Success",
                data: data
            });
        }
    })
};

exports.findAll = (req, res) => {
    Todo.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "ERROR"
            });
        else res.send({
            status: "Success",
            message: "Success",
            data: data
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findById(
        id,
        (err, data) => {
            if(err) {
                if(err.kind === "not_found") {
                    res.send({
                        status: "Not Found", 
                        message: "Todo with ID " + id + " Not Found"
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating data with id : " + id
                    });
                }
            } else {
                res.send({
                    status: "Success",
                    message: "Success",
                    data: data
                });
            }
        }
    )
};

exports.update = (req, res) => {
    const { activity_group_id, title } = req.body;

    if(!activity_group_id || !title) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Todo.updateById(
        id,
        new Todo(req.body),
        (err, data) => {
            if(err) {
                if(err.kind === "not_found") {
                    res.send({
                        status: "Not Found", 
                        message: "Todo with ID " + id + " Not Found"
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating data with id : " + id
                    });
                }
            } else {
                res.send({
                    status: "Success",
                    message: "Success",
                    data: data
                });
            }
        }
    )
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Todo.remove(id, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.send({
                    status: "Not Found", 
                    message: "Todo with ID " + id + " Not Found"
                });
            } else {
                res.status(500).send({
                    message: "Error updating data with id : " + id
                });
            }
        } else {
            res.send({
                status: "Success",
                message: "Success deleted data"
            });
        }
    })
};