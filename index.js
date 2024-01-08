const express = require("express");
const cors = require("cors")

// const multer = require('multer')
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const usermodel= require("./model/user");


const app = new express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());



app.get('/', (request, response) => {
    response.send("hi database")
})

app.post('/login', (request, response) => {
    console.log(request.body)
    new usermodel(request.body).save()
})

app.listen(4005, (request, response) => {
    console.log("port is running in 4005")
})