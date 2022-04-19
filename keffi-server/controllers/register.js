const db = require("../models");
const Registered = db.register;

//POST
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Body cannot be empty" });
    return;
  }

  const registered = new Registered({
    ID: req.body.ID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: req.body.role,
    department: req.body.department,
    dateBirth: req.body.dateBirth,
    contractType: req.body.contractType,
    dateEmployment: req.body.dateEmployment,
    photo: req.body.photo,
  });

  registered
    .save(registered)
    .then((data) => {
      console.log(res.json(data));
    })
    .catch((err) => {
      if (err)
        res
          .status(500)
          .json({ message: "Error in creating new staff information!" });
    });
};

//GET ALL

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
  Registered.find(condition)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

//GET BY ID

exports.findOne = (req, res) => {
  const id = req.params.id;
  Registered.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Employee does not exist!" });
      console.log(err);
    });
};

//UPDATE BY ID

exports.update = (req, res) => {
  const id = req.params.id;
  Registered.findByIdAndUpdate(id, { $set: req.body }, (err, data, next) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      res.json(data);
      console.log("Employee information was successfully updated");
    }
  });
};

//DELETE BY ID

exports.delete = (req, res) => {
  const id = req.params.id;
  Registered.findByIdAndRemove(id)
    .then((data) => {
      !data ? res.status(404).json({message: "Error in deleting object!"}) : res.status(200).json();
      console.log("Employee information was deleted successfully!");
    })
    .catch((err) => {
      res.status(500).json();
      console.log(err);
    });
};

//DELETE ALL

exports.deleteAll = (req, res) => {
  Registered.deleteMany({})
    .then((data) => {
      res.status(200).json();
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
