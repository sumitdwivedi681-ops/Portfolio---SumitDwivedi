import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema, 'message');

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  image: String,
  link: String,
  github: String
});
const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // 1. Save to Database (Fast)
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2. Respond to user immediately
    res.status(201).json({ success: true, message: 'Message saved successfully' });

    // 3. Send Email in Background (Don't wait for it)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Gmail requires this to be the authenticated user
      to: process.env.EMAIL_USER,
      replyTo: email, // Set visitor's email as reply-to
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Background Email Error:', error);
      } else {
        console.log('Email sent successfully:', info.response);
      }
    });

  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
