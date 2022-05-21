const db = require("../models");
const Appraisal = db.appraisal;

//CREATE

exports.create = (req, res) => {
  if (!req.body) {
    res.status(500).json({ message: "Form cannot be empty!" });
    return;
  }

  const appraisal = new Appraisal({
    month: req.body.month,
    year: req.body.year,
    department: req.body.department,
    ID: req.body.ID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    qualityOfWork: req.body.qualityOfWork,
    delivery: req.body.delivery,
    responsibility: req.body.responsibility,
    quantityOfWork: req.body.quantityOfWork,
    punctuality: req.body.punctuality,
    supervisorComment: req.body.supervisorComment,
    hrComment: req.body.hrComment,
  });

  appraisal
    .save(appraisal)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

//GET ALL

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
  Appraisal.find(condition)
    .then((data) => {
      res.json(data)
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//GET ONE
exports.findOne = (req, res) => {
  const id = req.params._id;
  Appraisal.findById(id)
    .then((data) => {
      res.status(200).json();
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//UPDATE

exports.update = (req, res) => {
  const id = req.params._id;
  Appraisal.findByIdAndUpdate(id, { $set: req.body }, (err, data, next) => {
    if (err) {
      res.status(500).json({
        message: "Error in updating employee information!",
      });
      return next(err);
    } else {
      res.status(200).json({
        message: "Updated employee information successfully!",
        data: data,
      });
    }
  });
};

//DELETE ONE

exports.delete = (req, res) => {
  const id = req.params.id;
  Appraisal.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(403).json({
          message: "Forbidden request",
        });
      } else {
        res.status(200).json({
          message: "Deleted employee information successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//DELETE ALL

exports.deleteAll = (req, res) => {
  Appraisal.deleteMany({})
    .then((data) => {
      res.status(200).json("Deleted all employee information!");
      console.log(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occurred in deleting all employees",
      });
      console.log(err);
    });
};
