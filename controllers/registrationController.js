let registrationController = (req, res) => {
  //console.log("Tintinatin") (set up thik holo kina check kora holo)

  let { username, email, password, confirmPassword } = req.body;
  //console.log(username, email, password, confirmPassword);
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
    res.send({ success: "Account created" });
  }

  //vul code:
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
 