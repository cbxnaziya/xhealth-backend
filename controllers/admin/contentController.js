const question = require("../../models/question");




const getContents = async (req, res) => {
    try {
        // Find the profile of the user by userId
        const profiles = await question.find();
console.log("profiles",profiles);

        // If no profile is found, return an error response
        if (!profiles) {
            return res.status(404).json({ success: false, message: "Profile not found." });
        }

        // Send the profile data as the response
        res.status(200).json({ success: true, profiles });
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ success: false, error: "An error occurred while fetching the profile." });
    }
};
module.exports = {getContents}