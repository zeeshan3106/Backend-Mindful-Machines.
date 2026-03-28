import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.Email, // full Gmail
    pass: process.env.PASS   // App Password
  }
});

async function SendEmail(to, subject, text = '', html = '') {
  try {
    const info = await transporter.sendMail({
      from: process.env.Email,
      to,
      subject,
      text,
      html
    });

    console.log('✅ Nodemailer sent:', info);  // must be inside try
    console.log('MessageId:', info.messageId); // also inside try

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ SendEmail error:', error);
    return { success: false, error };
  }
}

export default SendEmail;
