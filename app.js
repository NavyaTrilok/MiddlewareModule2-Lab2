// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require("axios");

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

////  Write your code here
const books = [];
const fruits = ["Apple", "Orange", "Banana"];

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

app.get("/", (req, res) => {
    //res.render("books", {books});
    //res.render("userI");
    //res.sendFile(__dirname + 'userInfo.ejs');
    //res.render("fruits", {fruits});

    /*const user = {
        userName: 'Trilok Navya',
        userAge: '21',
        userEmail: 'tdubaka@gmail.com',
      };*/
    
      //res.render('userInfo', user);

      //res.send('Welcome to the homepage!');
      //res.prependOnceListener('httpRequest');
     res.render('httpRequest');
     //res.render('async');
});

app.post("/addBook", (req,res) => {
    const {title, author, publicationYear} = req.body;
    books.push({title, author, publicationYear});
    res.redirect("/");
});

 
  // route handler for the form
  app.post("/createUser", (req, res) => {
    const { name, age, email } = req.body;
    const user = new User(name, age, email);
    const { name: userName, age: userAge, email: userEmail } = user;
    //res.render("userInfo", { userName, userAge, userEmail });
    res.render("userInfo", { userName: user.name, userAge: user.age, userEmail: user.email });
  });

  app.post("/addFruit", (req,res) => {

    const { fruit } = req.body;
    fruits.push(fruit);
    res.redirect("/");
}) ;


app.get("/simulateAsync", (req, res) => {
    setTimeout(() => {
      res.json({ message: "Asynchronous operation completed!" });
    }, 2000);
  });

  app.post("/makeRequest", async(req, res) => {
    const{ url } = req.body;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    }catch(error){
        res.json({error: error.message});
    }
  });

// Start the server on port 4000,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
// NOTE
// the quotes are replaced by back ticks ` next to key caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });