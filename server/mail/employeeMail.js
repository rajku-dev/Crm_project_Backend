import nodemailer from "nodemailer";

const sendMail = (username, email, password) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: process.env.SENDER,
        pass: process.env.PASSKEY,
      },
    });

    const mailOptions = {
      from: `"Admin" ${process.env.SENDER}`,
      to: email,
      subject: "Your Login Credentials",
      html: `<div style="padding: 10px">
      <h2>Hi ${username},</h2>

      <p>Welcome to [Company Name]! Here are your login credentials:</p>
      <p>
        Username:
        <span style="font-weight: 600; color: rgb(77, 74, 74)">${username}</span>
      </p>
      <p>
        Password:
        <span style="font-weight: 600; color: rgb(77, 74, 74)">${password}</span>
      </p>
      <p>Please log in at [URL] and change your password upon first login.</p>

      <p>Best regards,</p>
      <p>${username}</p>
      <p>[Company Name]</p>

      <p>Feel free to adjust as needed!</p>
    </div>
 `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail send successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
