import express from "express"
import cors from "cors"

import db from "./db.json" assert { type: "json" }

const PORT = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
	console.log(`🚀 Server running on PORT: ${PORT}`)
})

app.get("/photos", async (req, res) => {
	res.json(db)
	res.end()
})
