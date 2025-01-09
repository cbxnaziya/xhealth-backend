const User = require('../models/User'); // Assuming you have a User model

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({role:"user"}); // Example: Fetch all users from the database

    res.status(200).json({ success: true, users  : users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
// Update user by ID
const updateUser = async (req, res) => {
    const userData = req.body; // Extract updated user data from the request body
console.log("user", userData,req.id);


    try {
      // Find user by ID and update their information
      const user = await User.findByIdAndUpdate(req.id, userData);
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      res.status(200).json({ success: true, message: 'User Updated Successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };

module.exports = { getAllUsers,updateUser };
