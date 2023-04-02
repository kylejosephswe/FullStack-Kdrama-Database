const express = require("express")
const Drama = require("./db/schemas/Drama")
require("./db")
const app = express()
const PORT = 5000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.post('/', async (req, res) => {
    const { name, year } = req.body
    //const dramaDB = await Drama.find({ $or: [{ name }, { year }] })
    const newDrama = await Drama.create({ name, year })
    if (newDrama) {
        console.log("Drama should be added to database")
        res.send(201)
    }
    else {
        res.send(400)
    }
})

app.delete('/', async (req, res) => {
    const { name, year } = req.body
    const deletedDrama = await Drama.deleteMany( {name: name, year: year})
    if (deletedDrama) {
        console.log("Item/items deleted!")
        res.send(deletedDrama)
    }
    else {
        res.send(400)
    }
})