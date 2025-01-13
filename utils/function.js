

const crypto = require('crypto');  // To generate OTPs

// Utility function to generate a 4-digit OTP
const generateOtp = () => {
    return crypto.randomInt(1000, 10000).toString(); // Generate random OTP between 1000 and 9999
};

module.exports = { generateOtp };
