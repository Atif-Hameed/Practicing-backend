const express = require('express')
const Student = require('./schema/student')
require('./db/config')
const Cors = require('cors')

const app = express()
app.use(express.json())
app.use(Cors())

app.post('/studentData', async (req, resp) => {
    const data = await new Student(req.body)
    const result = await data.save()
    resp.send(result)
})

app.get('/history', async(req, resp) => {
    const data = await Student.find()
    resp.send(data)
})

app.get('/completeData/:id', async(req, resp) => {
    const data = await Student.findOne({_id: req.params.id})
    resp.send(data)
})

app.delete('/delete/:id', async (req, resp) => {
    const data = await Student.deleteOne({_id: req.params.id})
    resp.send(data)
})

app.listen(5000)