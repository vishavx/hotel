const express = require("express");
const sendEmail = require("./utilis/mailer.js");

const app = express();
const PORT = process.env.PORT || 9000;

//set engine
app.set("view engine", "ejs");
//serve static assets
app.use(express.static("public"));
//pass the data from form
app.use(express.urlencoded({ extended: false }));

//route to render email form
app.get("/", (req, res) => {
    res.render("hotel");
});

// //route to send the email
app.post("/sendEmail", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(name, email, message);
        await sendEmail(email, message);
        res.render("hotel");

    } catch (error) {
        console.error(error);

    }
});

//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));