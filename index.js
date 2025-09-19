//

// //class 77:
// const express = require("express");
// const app = express();

// // pathanor somoy stringify korte hoa anar somoy parse korte hoa , abar save korar somoy stringify korte hoa .. ai jhamelata hoichilo. akane o same jhamela ache but solve korar way khub simple. aikhane ashe ami likhbo ->

// app.use(express.json()); //amar r kichu korte hobe na kon somoy stringify korte hobe r kon somoy parse korte hobe o bujhe nibe.

// // api make kori:
// app.get("/", (req, res) => {
//   res.send("Hello Developers");
// });

// app.post("/", (req, res) => {
//   //res.send("Hello")
//   //console.log("Hello")

//   //console.log(req.body);
//   //node js a dhorar jonno onek maramari korte hoiche na body nao akta chunk banao akta . chunk theke body te rakho. ata koro seita koro...aikhane shudhu bole dibo req.body
//   //akhon ami req.body dia je data ta pelam -> title : Asma , ai data ta ke dhorar jonno ami distructure kore dhorte parbo. example
//   let { title } = req.body;
//   console.log(title); // title ta amra terminale a dekhte parbo ok.
//   res.send({ success: "todo created" });
// });

// app.listen("8000", () => {
//   console.log("server is running");
// });

// const express theke app.listen porjonto aita amar class 77 r moto same vabe install process korte hobe.

//class 78(part1):
//console.log("welcome todo registration")

const express = require("express");
const app = express();
const registrationController = require("./controllers/registrationController");

app.use(express.json());

app.post("/registration", registrationController); 

app.listen("8000", () => {
  console.log("server is running");
});

//Registration
//Login
//CRUD with image upload (Create,Read, Update, Delete)
//Access token with Refresh token
//Logout
