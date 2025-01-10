const Project = require('../models/Project');

exports.submitProject = async (req, res) => {
  try {
    const { title, description, category, deadline, budget } = req.body;

    // Create a new project document
    const newProject = new Project({
      title,
      description,
      category,
      deadline,
      budget,
    });

    // Save the project to the database
    await newProject.save();
    res.status(200).json({ message: 'Project submitted successfully!' });
  } catch (error) {
    console.error('Error during project submission:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.searchProjects = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm || '';  // Get the search term from the query params

    let query = {
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } }
      ]
    };

    if (!isNaN(searchTerm)) {
      query.$or.push({ budget: Number(searchTerm) });
    } else {
      query.$or.push({ budget: { $regex: searchTerm, $options: 'i' } });
    }

    const projects = await Project.find(query);
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
