
// User signup logic
const signup = async (req, res) => {
  try {
    console.log('Request received at /signup');
    console.log('Request Body:', req.body);

    const { name, email, password, role } = req.body;

    // Validate input fields
    if (!name || !email || !password || !role) {
      console.log('Validation failed: Missing fields');
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', existingUser);
      return res.status(409).json({ message: 'User already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);

    // Respond with success
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Export the controller functions
module.exports = {
  signup,
};
