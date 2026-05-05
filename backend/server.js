import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import mongoose from 'mongoose';
import { Resend } from 'resend';

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: '*',
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
    
    // 1. Save to Database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log('Message saved to DB');

    // 2. Respond to user immediately
    res.status(201).json({ success: true, message: 'Message saved successfully' });

    // 3. Send Email via Resend API (works on all hosting platforms)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `📩 New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; color: #e0e0e0; border-radius: 10px;">
            <h2 style="color: #9d4edd;">New Message from Your Portfolio</h2>
            <hr style="border-color: #333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ff9e00;">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background: #16213e; padding: 15px; border-radius: 8px; line-height: 1.6;">${message}</p>
            <hr style="border-color: #333;">
            <p style="font-size: 12px; color: #888;">Sent from your Portfolio website</p>
          </div>
        `
      }).then((result) => {
        console.log('Email sent via Resend:', result);
      }).catch((err) => {
        console.error('Resend Error:', err);
      });
    }

  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Email test route
app.get('/api/test-email', async (req, res) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      return res.json({ success: false, error: 'RESEND_API_KEY not set' });
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const result = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.EMAIL_USER,
      subject: '✅ Portfolio Email Test',
      html: '<h1>Email is working!</h1><p>Your portfolio contact form will now send you email notifications.</p>'
    });

    res.json({ success: true, message: 'Test email sent!', result });
  } catch (error) {
    res.json({ success: false, error: error.message });
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
