import express from 'express'
import dotenv from 'dotenv'
//Routers
import ProductRouter from './routers/ProductRouter.js'

const app =express()

dotenv.config()
app.use(express.json())

app.use('/api/products',ProductRouter)


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is up on port : ${PORT}`)
})