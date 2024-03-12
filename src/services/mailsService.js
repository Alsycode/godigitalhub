    var nodemailer = require("nodemailer");
    //-----------------------------------------------------------------------------
    export async function sendMail(subject, toEmail, otpText, name, email) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: "shyamalfred@gmail.com",
        pass: "yjkmdhmxtflkbzfk",
        },
        tls: {
            rejectUnauthorized: false // Disable SSL verification
        }
    });

   
        var mailOptions = {
            from: "shyamalfred@gmail.com",
            to: "shyamalfred@gmail.com",
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${otpText}`,
          };
    

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        throw new Error(error);
        } else {
        console.log("Email Sent");
        return true;
        }
    });
    }