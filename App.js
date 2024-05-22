import express from 'express'
import mongoose, { connect } from 'mongoose'
import cors from 'cors'
const app=express()

mongoose.connect('mongodb://localhost:27017/Storage')
.then(()=>console.log('MongoDB Connected!'))

const db=mongoose.connection

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home')

})

let middle=(req,res,next)=>{
    console.log('Middle Running')
    next()
}

app.get('/login',middle,(req,res)=>{
    res.json({page:'login'})
})
app.get('/register',middle,(req,res)=>{
    res.json({status:'success'})
})

app.get('/view',async(req,res)=>{
    let  data=await db.collection('cars').find().toArray()
    console.log(data)
res.json(data)
})

app.get('/add',async (req,res)=>{
    let add=await db.collection('cars').insertOne({name:'Jazz',make:'Honda',type:'Hatchback'})
    console.log(add)
    res.json(add)
})

app.get('/delete', async (req,res)=>{
    let deletejazz= await db.collection('cars').deleteOne({name:'Jazz'})
    console.log(deletejazz)
    res.json(deletejazz)

})

app.listen(4000,()=>{
    console.log('running on 4000');
})