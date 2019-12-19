const express = require ('express')
const controller = require('../controllers/user')
const auth = require('../helpers/auth')
const Router = express.Router()



Router
    .get ('/', auth.checkToken, controller.getUser) 
    .post ('/', controller.addUser)  
    .patch ('/:id_user', controller.editUser)
    .delete ('/:id_user', controller.deleteUser)
    .post('/login', controller.loginUser)
    .post('/token', refreshToken )

module.exports = Router


    function refreshToken(req, res) {
    const refreshToken = req.body.token
    console.log(req)
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) res.sendStatus(403)
        const accessToken = generateAccessToken({ "name":user.name})
        res.json({ accessToken : accessToken})
    })
    }