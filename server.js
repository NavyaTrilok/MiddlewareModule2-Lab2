const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

//create an instance of express
const server = express();

server.use(bodyparser.urlencoded({extended:false}));

//set EJS as templating engine
//set view engine to EJS
server.set('view engine', 'ejs');
server.set('views',path.join(__dirname,'views'));
console.log('views',path.join(__dirname,'views'));
//code here



server.get('/',(req,res) => {
    //render the form and pass current student data
    
    res.render('index');
    
});

server.post('/calculate',(req,res) => {
    //Add the submitted student data to our data store
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("answers", {sum, difference, product, quotient});

    //res.sendFile(path.join(__dirname, 'views', 'answers.html'));

});

/*server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index2.html'));

});

server.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;

    switch (operation) {
        case 'add':
            result = Number(num1) + Number(num2);
            break;
        case 'subtract':
            result = Number(num1) - Number(num2);
            break;
        case 'multiply':
            result = Number(num1) * Number(num2);
            break;
        case 'divide':
            if (Number(num2) === 0) {
                res.status(400).send('Division by zero is not allowed.');
                return;
            }
            result = Number(num1) / Number(num2);
            break;
        default:
            res.status(400).send('Invalid operation.');
            return;
    }

    res.render('calculatorAnswersEnhancement', { num1, num2, operation, result });
});*/


var port = 3000
//start server
server.listen(port,() => {
    console.log(`Server is running on port ${port}`);
    
});
