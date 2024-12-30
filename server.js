const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');
// const moodRoutes = require('./routes/moodRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');
const adminAuthRoutes = require('./routes/admin/adminAuthRoutes');
const cors = require('cors')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// users
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/users', userRoutes);

// Admin
app.use('/api/admin/auth', adminAuthRoutes);

app.get("/abcd",async(req,res)=>{
    return res.status(200).json({message:"Hello"})
 })
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
