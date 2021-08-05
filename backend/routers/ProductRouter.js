//import Product from '../models/ProductModels'
import express from 'express'
import Products from '../data/ProductsData.js'

const router = express.Router()

router.get('/', (req,res)=>{
     res.send(Products)
})

export default router