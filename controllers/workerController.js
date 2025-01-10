const Worker = require('../models/workerModel');

exports.createWorker = async (req, res) => {
  try {
    const newWorker = new Worker(req.body);
    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (error) {
    res.status(500).json({ message: 'Error creating worker', error });
  }
};

exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workers', error });
  }
};
