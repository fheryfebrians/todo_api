const Activity = require('../models/activity.model');

exports.create = (req, res) => {
    const { email, title } = req.body;

    if(!email || !title) {
        res.status(400).send({
            message: "can not be empty"
        });
        return;
    }

    const activity = new Activity({
        email: email,
        title: title
    });

    Activity.create(activity, (err, data) => {
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
    Activity.getAll((err, data) => {
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

    Activity.findById(
        id,
        (err, data) => {
            if(err) {
                if(err.kind === "not_found") {
                    res.send({
                        status: "Not Found", 
                        message: "Activity with ID " + id + " Not Found"
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
    const { email, title } = req.body;

    if(!email || !title) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Activity.updateById(
        id,
        new Activity(req.body),
        (err, data) => {
            if(err) {
                if(err.kind === "not_found") {
                    res.send({
                        status: "Not Found", 
                        message: "Activity with ID " + id + " Not Found"
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

    Activity.remove(id, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.send({
                    status: "Not Found", 
                    message: "Activity with ID " + id + " Not Found"
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