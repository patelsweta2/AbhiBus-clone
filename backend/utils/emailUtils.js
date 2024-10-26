import nodemailer from "nodemailer";

const sendEmail = (email, subject, htmlContent) => {
  let Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });
  let mailOptions;
  let sender = "AbhiBus";
  mailOptions = {
    from: sender,
    to: email,
    subject: subject,
    html: htmlContent,
  };
  Transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Verification email sent");
    }
  });
};

export default sendEmail;

// `<p>Please click the link below to verify your email:</p>
//             <a href="${verificationLink}">${verificationLink}</a>`,
