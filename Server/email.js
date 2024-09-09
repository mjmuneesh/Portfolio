var nodemailer = require('nodemailer');
 
let transporter = nodemailer.createTransport({
 
  service: "outlook",
  host: "smtp.office365.com",
  port: 587,//default
  secureConnection: false,// true for 465,false for other ports
  auth: {
    user: "sapnadevi.1610a@gmail.com", // generated ethereal user
    pass: "aoamvumdskzctkry", // generated ethereal password
  },
});
 
function sendMail(callback) {
 
  let info = {
    from: "sapnadevi.1610a@gmail.com",
    to: ["muneeshsharma094@gmail.com","guptaashima30@gmail.com"],
    subject: "Template testing",
    text: "Email Template",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
    @font-face {
        font-family: inter;
        src: url(../Inter/Inter-VariableFont_slnt\,wght.ttf);
    }
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #fff;
      }
      .main {
        width: 640px;
        margin: 0 auto;
        background-color: #f2f5f8;
      }
      .email-container {
        width: 570px;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
        /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
      }
      .email-header {
        padding: 20px;
        background-color: #f2f5f8;
        /* text-align: center; */
      }
      .email-header img {
        max-width: 150px;
      }
      .email-body {
        padding: 20px;
        background-color: #ffffff;

      }
      .email-header h1 {
        font-size: 24px;
        color: #333333;
      }
      .email-body p {
        font-size: 16px;
        color: #555555;
        line-height: 1.6;
      }
      .email-body a {
        color: #ffffff;
        text-decoration: none;
      }
      .link a {
        color: #0077f7;
        text-decoration: underline;
      }
      .email-footer {
        padding: 20px;
        background-color: #f7f9fc;
        text-align: left;
        font-size: 14px;
        color: #888888;
        font-family: inter;
      }
      .email-footer a {
        color: #007bff;
        text-decoration: none;
      }
      button {
        width: 92px;
        height: 42px;
        display: inline-block;
        background-color: #212456;
        color: #ffffff;
        text-decoration: none;
        border-radius: 35px;
        border: none;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div class="email-container">
        <div class="email-header mb-2 mt-4">
          <img src="./Aarklogo-blue.svg" alt="AARK Global Inc" />
          <h1 class="mt-4">Hi Dinesh,</h1>
          <h1>Lorem ipsum dolor sit amet, adipiscing elit.</h1>
        </div>

        <div class="email-body">
          <p>Hi Dinesh,</p>
          <p>I hope you are doing well.</p>
          <p>
            I am excited to extend an exclusive invitation for you to visit
            <span class="link"><a href="#">AARK Global Inc's</a> </span> booth
            at the upcoming SEMICON WEST 2024 conference.
          </p>
          <p>
            Join us at booth no—5243, where we will be showcasing our latest
            innovations and solutions for the semiconductor industry. As my
            valued partner/client, I am thrilled to offer you a special guest
            pass. This will provide you with an opportunity to engage with our
            Team, explore next-gen products, and discuss how we can further
            support your business needs.
          </p>
          <button><a href="#">Primary</a></button>
        </div>
        <div class="email-footer">
          <p class="pt-3">
            This email was sent to <a href="#">abc@gmail.com</a>. If you'd
            rather not receive this kind of email, you can
            <a href="#">unsubscribe</a> or
            <a href="#">manage your email preferences</a>.
          </p>
          <div class="d-flex justify-content-between mt-5">
            <div>
              <img src="./Group.svg" alt="" />
            </div>
            <div>
              <img src="./twitter.png" alt="" />
              <img src="./linkedin.png" alt="" />
              <img src="./facebook.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`,
  }
 
  transporter.sendMail(info, callback);
}
 

sendMail((err)=>{
  if(err)
    console.log("error: ",err)
  else
    console.log("success")
})
 