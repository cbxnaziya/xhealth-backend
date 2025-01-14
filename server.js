const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');
// const moodRoutes = require('./routes/moodRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');
const adminAuthRoutes = require('./routes/admin/adminAuthRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const questionRoutes = require('./routes/questionRoutes');
const contentRoutes = require('./routes/contentRoutes');

const cors = require('cors')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', timeout: 60000 })); // Timeout set to 60 seconds

app.use(cors());
// Increase body size limit to 50MB

// users
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/content', contentRoutes);

// Admin
app.use('/api/admin/auth', adminAuthRoutes);

app.get("/abcd",async(req,res)=>{
    return res.status(200).json({message:"Hello"})
 })
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
