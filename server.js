const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const connectDB = require('./config/db');

// admin



connectDB();

const app = express();
// app.use(cors());
const corsOptions = {
    origin: '*', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow Authorization header
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', timeout: 60000 })); // Timeout set to 60 seconds

// app.use(cors({
//     origin: 'http://your-frontend-url', // Allow only the frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
//     allowedHeaders: ['Authorization', 'Content-Type'],
//   }));
// Increase body size limit to 50MB

// users
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const contentRoutes = require('./routes/contentRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/content', contentRoutes);
// app.use('/api/mood', moodRoutes);


// Admin
const adminAuthRoutes = require('./routes/admin/adminAuthRoutes');
const categoryRoutes = require('./routes/admin/categoryRoutes');
const adminUserRoutes = require('./routes/admin/userRoutes');
const adminProfileRoutes = require('./routes/admin/profileRoutes');
const profileQuestionsRoutes = require('./routes/admin/profileQuestionsRoutes');
const adminContentRoutes = require('./routes/admin/contentRoutes');

// app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/user', adminUserRoutes);
app.use('/api/profiles', adminProfileRoutes);
app.use('/api/profiles-questions', profileQuestionsRoutes);

app.use('/api/contents', adminContentRoutes);

app.get("/abcd",async(req,res)=>{
    return res.status(200).json({message:"Hello"})
 })
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
