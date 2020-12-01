const models = require('../models');

const getAllTechnicians = async (req, res) => {
  try {
    const techniciansFromDB = await models.Technicians.find({});
    res.status(200).json(techniciansFromDB);
  } catch (error) {
    res.status(500).json({
      msg: 'Error: cannot find all the technicians'
    });
  }
};

const createTechnician = async (req, res) => {
  if (!req.body.firstName || !req.body.address || !req.body.lastName || !req.body.phone
  || !req.body.boilerTypes || !req.body.email || !req.body.dateOfBirth
  || !req.body.monthlyCapacity || !req.body.hourRate) {
    return res.status(500).json({
      msg: 'Error: missing required fields to create a new Technician'
    });
  }

  const technician = new models.Technicians({
    firstName: req.body.firstName,
    address: req.body.address,
    lastName: req.body.lastName,
    phone: req.body.phone,
    boilerTypes: req.body.boilerTypes,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    monthlyCapacity: req.body.monthlyCapacity,
    hourRate: req.body.hourRate,
  });

  try {
    const result = await technician.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error: required field missing'
    });
  }
};

const findTechnicianById = async (req, res) => {
  const { id } = req.params;
  try {
    const techniciansFromDB = await models.Technicians.findById(id);
    res.status(200).json(techniciansFromDB);
  } catch (error) {
    res.status(500).json({
      msg: `There is no technician with the id of ${id}`
    });
  }
};

const updateTechnician = async (req, res) => {
  const { id } = req.params;
  if (!req.body.firstName || !req.body.address || !req.body.lastName || !req.body.phone
    || !req.body.boilerTypes || !req.body.email || !req.body.dateOfBirth
    || !req.body.monthlyCapacity || !req.body.hourRate) {
    return res.status(500).json({
      msg: 'Error: missing required field to create a Technician'
    });
  }
  try {
    const result = await models.Technicians.findByIdAndUpdate(id, req.body, { new: true, });
    return res.status(200).json({
      msg: 'Updated technician:',
      result
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error appeared while updating the Technician'
    });
  }
};

const deleteTechnician = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Technicians.findByIdAndDelete(id);
    res.status(200).json({
      msg: 'Technician eliminated: ',
      result
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error: something went wrong while deleting Technician'
    });
  }
};

module.exports = {
  getAllTechnicians,
  createTechnician,
  findTechnicianById,
  updateTechnician,
  deleteTechnician
};
