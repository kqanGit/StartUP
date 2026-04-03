import express from 'express'
import "dotenv/config.js";
import { errorMiddleware } from './middlewares/error.middleware.js'
import ideaRouter from './routes/idea.route.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", ideaRouter)
app.use(errorMiddleware)

const PORT: string | number = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})