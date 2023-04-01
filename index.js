// console.log("Data validation")

//const something =require(somelibrary)
const express = require('express')
const app = express();
require('dotenv').config()
const { body, validationResult } = require('express-validator')

app.use(express.json())//for payload

//lets define route

//app.METHOD(PATH,Handeler FUNCTION)
app.post('/students', body('email').isEmail(), (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        //ture
        res.status(400).json({ "err": errors.array() })

    }

    console.log(errors)
    console.log(req.body)
    res.status(200).json({
        "msg": "OK",
        data: req.body.email
    })
})

let PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})