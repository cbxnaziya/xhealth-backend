const bcrypt = require("bcryptjs");
const { validateEmail, validatePhone } = require("../utils/validators"); // Validation utilities
const { sendOtpEmail, sendOtpPhone } = require("../utils/otpService");
const { generateOtp } = require("../utils/function");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");

// done
const profileSave = async (req, res) => {
  // Save Profile API

  try {
    const {  gender, nickname, religion, mood,  emotion,feeling, goal, experience,trauma, religious } = req.body;

    // Validate required fields
    if ( !gender ||  !nickname || !religion ||  !mood || !emotion || !feeling || !goal ||  !experience ||  !trauma || !religious ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if the profile already exists for this userId
    const existingProfile = await Profile.findOne({ userId: req.id });

    if (existingProfile) {
      // If a profile already exists, return a message to inform the user
      return res
        .status(400)
        .json({ message: "Profile already created for this user." });
    }

    // Create a new profile instance
    const newProfile = new Profile({
      userId: req.id,
      gender,
      nickname,
      religion,
      mood,
      emotion,
      feeling,
      goal,
      experience,
      trauma,
      religious,
    });

    // Save the profile to the database
    const savedProfile = await newProfile.save();

    // Send success response
    res
      .status(201)
      .json({ message: "Profile saved successfully.", profile: savedProfile });
  } catch (error) {
    console.error("Error saving profile:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the profile." });
  }
};

const updateProfile = async (req, res) => {
  const userId = req.id;

  try {
    const { ...fieldsToUpdate } = req.body;

    // Validate userId
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    // Update the profile and return the updated document
    const updatedProfile = await Profile.findOneAndUpdate(
      { userId }, // Query to find the profile
      { $set: fieldsToUpdate }, // Update only provided fields
      { new: true } // Return the updated document
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found." });
    }
    // Send success response
    res
      .status(200)
      .json({
        message: "Profile updated successfully.",
        profile: updatedProfile,
      });
  } catch (error) {
    console.error("Error updating profile:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the profile." });
  }
};


const getProfile = async (req, res) => {
  try {
    // Find the profile of the user by userId
    const profile = await Profile.findOne({ userId: req.id });

    // If no profile is found, return an error response
    if (!profile) {
      return res.status(404).json({  success: false, message: "Profile not found." });
    }

    // Send the profile data as the response
    res.status(200).json({ success: true, profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({    success: false, error: "An error occurred while fetching the profile." });
  }
};


module.exports = { profileSave, updateProfile,getProfile };
