const User = require('../models/User'); // Assuming you have a User model
const { sendOtpEmail, sendOtpPhone } = require('../utils/otpService');

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
// const updateUser = async (req, res) => {
//     const userData = req.body; // Extract updated user data from the request body
// console.log("user", userData,req.id);


//     try {
//       // Find user by ID and update their information
//       const user = await User.findByIdAndUpdate(req.id, userData);
  
//       if (!user) {
//         return res.status(404).json({ success: false, message: 'User not found' });
//       }
  
//       res.status(200).json({ success: true, message: 'User Updated Successfully' });
//     } catch (error) {
//       console.error('Error updating user:', error);
//       res.status(500).json({ success: false, message: 'Server Error' });
//     }
//   };


  const updateUser = async (req, res) => {
  const { email, phone,country_code, ...restData } = req.body; // Extract email and phone from request body
  const userId = req.id; // Assuming user ID is in `req.id`

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if email is different
    if (email && email !== user.email) {
      const emailOtp = Math.floor(1000 + Math.random() * 9000); // Generate OTP
      console.log("otp:",emailOtp);
            
      await sendOtpEmail(email, emailOtp); // Send OTP to new email
      user.email_otp = emailOtp; // Save OTP in the database
      user.new_email = email; // Save OTP in the database
    }
    
    // Check if phone is different
    if (phone && phone !== user.phone || country_code !== user.country_code) {
      const phoneOtp = Math.floor(100000 + Math.random() * 900000); // Generate OTP
      console.log("otp:",emailOtp);
      await sendOtpPhone(phone, phoneOtp); // Send OTP to new phone
      user.phone_otp = phoneOtp; // Save OTP in the database
      if(country_code !== user.country_code){
        user.new_country_code = country_code; // Save OTP in the database
      }
      user.new_phone = phone; // Save OTP in the database
    }

    // Update other user details
    Object.assign(user, restData);

    await user.save();

    res.status(200).json({
      success: true,
      message: 'User updated successfully. Please verify your new email or phone.',
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


module.exports = { getAllUsers,updateUser };
