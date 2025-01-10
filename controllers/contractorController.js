const Contractor = require('../models/contractorModel');

exports.createContractor = async (req, res) => {
  try {
    const newContractor = new Contractor(req.body);
    await newContractor.save();
    res.status(201).json(newContractor);
  } catch (error) {
    res.status(500).json({ message: 'Error creating contractor', error });
  }
};

exports.getContractors = async (req, res) => {
  try {
    const contractors = await Contractor.find();
    res.status(200).json(contractors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contractors', error });
  }
};
