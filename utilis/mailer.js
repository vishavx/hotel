const nodemailer = require('nodemailer');


const sendEmail = async(name,email,messageContent)=>{
  try {
    // Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vishavgarg90@gmail.com',
    pass: 'rglatflqsjvqfvyb'
  }
});

// Create the email message
const mailOptions = { 
  from: 'vishavgarg90@gmail.com',
  to: 'vishavgarg.bt21cse@pec.edu.in',
  subject: 'This Email is sent via hotel kailash website',
  text: 'Email sent by \n'+'Name : '+name+'\nEmail :'+email+'\nMessage : '+messageContent
  // text: messageContent
};

const info = await transporter.sendMail(mailOptions)
console.log('Email sent:', info);
  } catch (error) {
    console.log('Error:', error);
  }
}

module.exports=sendEmail;




// // Send the email
// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log('Error:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
// });
