const express = require('express')
const app = express()

const PORT = 8000

let apiList = require('./apiObjects')

app.get('/', (req,res)=>{
    res.send(`This is the homepage.<br>
    To access each employee info, please route to the address .../api/employees/E<span style = "font-weight: bold">"enter employee number here"</span><br>
    To access all employees , please redirect to .../api/employees`)
})

app.get('/api/employees', (req,res)=>{
    res.json(apiList.objectList.Employees)
})

app.get('/api/employees/:userID',(req,res)=>{
    let employeeID = req.params.userID.toUpperCase()
    const entry = apiList.objectList.Employees.find(entry => entry.employeeCode == employeeID)
    // res.send(apiList.objectList.Employees.find(entry => entry.employeeCode == employeeID))

    if(entry){
        res.json(entry)
    } else res.status(404).end()
})
    

app.listen(PORT, ()=>{
    console.log("server is running")
})