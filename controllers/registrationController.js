const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
let registrationController = async (req, res) => {
  //console.log("Tintinatin") (set up thik holo kina check kora holo)

  let { username, email, password, confirmPassword } = req.body;
  //console.log(username, email, password, confirmPassword);
  //================
  let errors = {
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  if (!username) {
    errors.usernameError = "username required";
  }
  if (!email) {
    errors.emailError = "email required";
  }
  if (!password) {
    errors.passwordError = "password required";
  }
  if (!confirmPassword) {
    errors.confirmPasswordError = "confirmPassword required";
  }
  if (password !== confirmPassword) {
    if (!errors.confirmPasswordError) {
      errors.confirmPasswordError = "Confirm password not matched";
    }
  }

  //amra cai password akek time a akek ta ashbe:
  let hash = await bcrypt.hash(password, 10);
  console.log(hash);
  //email r validation korte email r regex lagbe

  // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //console.log(pattern.test(email));
  if (!pattern.test(email)) {
    errors.emailError = "Please enter a valid email";
  }

  //console.log(errors.emailError) aikhane email r error check kore nilam.

  if (
    errors.usernameError ||
    errors.emailError ||
    errors.passwordError ||
    errors.confirmPasswordError
  ) {
    res.send({ errors: errors });
  } else {
    //================
    // Create a test account or replace with real credentials.
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "tuly.asma@gmail.com",
    //     pass: "jlao hgxc fxil oror", //  gmail r 2-step verification on kore app password create korte hobe ta na hole ata create hobe na.
    //   },
    // });
    // // Wrap in an async IIFE so we can use await.
    // const info = await transporter.sendMail({
    //   from: "Todo App",
    //   to: "herprojectasma@gmail.com",
    //   subject: `Hello ${username}`,
    //   //text: "Please click the link", // plain‑text body
    //   html: '<table cellpadding=0 cellspacing=0 role=presentation style=border-collapse:collapse width=100%><tr><td style=padding:24px align=center><table cellpadding=0 cellspacing=0 role=presentation style="max-width:600px;width:100%;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.08)"width=600><tr><td style="padding:40px 28px;text-align:center;background:linear-gradient(135deg,#38b2ac,#0ea5e9)"><h1 style=margin:0;font-size:24px;line-height:32px;color:#fff;font-weight:600>Confirm Your Email</h1><tr><td style=padding:28px;text-align:left><p style=margin:0;font-size:16px;line-height:24px;color:#334155>Hi <strong>${username}</strong>,<p style="margin:16px 0 0 0;font-size:16px;line-height:24px;color:#475569">Thanks for joining us! Please confirm your email address to activate your account and get started.<tr><td style="padding:12px 28px 28px 28px"align=center><table cellpadding=0 cellspacing=0 role=presentation style=border-collapse:collapse><tr><td style=border-radius:6px bgcolor=#14b8a6><a href={{confirm_url}} style="display:inline-block;padding:14px 28px;font-size:16px;color:#fff;text-decoration:none;font-weight:700;border-radius:6px;line-height:20px"target=_blank>Confirm Email</a></table><tr><td style="padding:0 28px 24px 28px"><p style=margin:0;font-size:14px;line-height:20px;color:#64748b>If the button above does not work, copy and paste this link into your browser:<p style="margin:8px 0 0 0;font-size:14px;line-height:20px;word-break:break-all"><a href={{confirm_url}} style=color:#0ea5e9;text-decoration:underline>{{confirm_url}}</a><tr><td style="padding:0 28px"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0"><tr><td style="padding:20px 28px;text-align:center;background:#f1f5f9"><p style=margin:0;font-size:12px;line-height:18px;color:#94a3b8>© {{year}} Your Company • 1234 Street Rd, Suite 100<p style="margin:8px 0 0 0;font-size:12px;line-height:18px;color:#94a3b8"><a href=# style=color:#94a3b8;text-decoration:underline>Unsubscribe</a> • <a href=# style=color:#94a3b8;text-decoration:underline>Privacy Policy</a></table></table>', // HTML body
    // });
    // console.log("Message sent:", info.messageId);
    //res.send({ success: "Account created" });
    //account created pathabo na aikhan thekekichu data pathabo
    //   res.send({
    //     success: {
    //       username: username,
    //       email: email,
    //       password:hash,
    //     },
    //   });
  }

  //password r bcrypt use kore compare kora:
  // $2b$10$XsMa0UzI89RIjlGdpqwNzOy7yfKyRAABSIv5wg6gD1NK1XlKwEJaS

  bcrypt.compare(
    "12345678",
    "$2b$10$XsMa0UzI89RIjlGdpqwNzOy7yfKyRAABSIv5wg6gD1NK1XlKwEJaS",
    (err, res) => {
      // res === false
      console.log(res);
    }
  );

  //vul code: aikhane && r porborte || or sign use korte hobe because jekono akta error pele jeno error show kore.
  // if (
  //   errors.usernameError &&
  //   errors.emailError &&
  //   errors.passwordError &&
  //   errors.confirmPasswordError
  // ) {
  //   res.send({ errors: errors });
  // } else {
  //   res.send({ success: "Account created" });
  // }
};
module.exports = registrationController;

//note:
//registration & login route & forget password  page secure hobe na aigula sobar jonno ummokto thakbe.aigula security r moddhe porbe na.aigula middleware dia secure kora jabe na.
// login korar por muloto toire hobe token.

//account create hoar time a akta email jabe . ja confirmation email bole.tahole amake ki korte hobe? mail pathaite hobe kono jaigai.
//mail pathainor jonno amra je software use korbo ta holo -> nodemailer(node js r daoa free). aro kichu paid software ache jemon: mailchimp,mailsender,aws...  etc
//free software use korle mail gula spam cole jabe.
