const express=require('express')
const app =express()
const studentData=require('./studentList.json')
const port =process.env.PORT || 8082
app.get('/',(req, res) =>
{
    res.send("BoardInfinity FullStack Developer Course")
})
app.get('/students',(req, res) =>{
    res.send(studentData)
})
app.listen(port,()=>{
    console.log('App is listening to the port')
})