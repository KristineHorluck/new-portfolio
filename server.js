const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // This allows your frontend to communicate with the backend
app.use(express.json()); // This parses JSON request bodies

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Rate limiting setup (basic)
const rateLimit = {};
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Maximum 5 emails per hour per IP

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        // Rate limiting check
        const ip = req.ip;
        const now = Date.now();
        
        if (!rateLimit[ip]) {
            rateLimit[ip] = {
                count: 0,
                resetTime: now + RATE_LIMIT_WINDOW
            };
        }

        if (now > rateLimit[ip].resetTime) {
            rateLimit[ip] = {
                count: 0,
                resetTime: now + RATE_LIMIT_WINDOW
            };
        }

        if (rateLimit[ip].count >= MAX_REQUESTS) {
            return res.status(429).json({
                error: 'Too many requests. Please try again later.'
            });
        }

        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Please provide name, email, and message'
            });
        }

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Message: ${subject || 'No Subject'}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'No Subject'}

Message:
${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        // Increment rate limit counter
        rateLimit[ip].count++;

        res.status(200).json({
            message: 'Email sent successfully'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to send email'
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});