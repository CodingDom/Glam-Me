const express = require('epress')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secrect'

users.post('/register', (req, res) => {
    const today = new Date()

    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today


    }

    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({ status: user.email + ' registerd!'})
                })
                .catch(err => {
                    res.send('err: ' + err)
                })
            })
        }else {
            res.json({ error: 'User alredy exit '})
        }
    
 })
 .catch(err => {
     res.send('error: ' + err)
 })

})

users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    id: user_id,
                    first_name: user.first_name,
                    last_name: user.first_name,
                    email: user.email,
                }
                let token = jwt.sign(payload, process.env.SECRECT_KEY, {
                    expiresIn : 1440
                }
                   
                )
                res.send(token)
            }else{
                res.json({error: "User does not exit"})
                
            }

            }else{res.json({error: "User does not exit"})
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.header['authorization'], process.env.SECRECT.KEY)

    user.findOne({
        _id: decoded._id
    })
    .then(user =>{
        if(user) {
            res.json(user)
        }else{
            res.send("User does not exit")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
module.exports = users