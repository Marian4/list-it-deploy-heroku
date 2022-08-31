'use strict'

function authMiddleware (req, res, next){
    const userid = req.session.userid
    if (!userid){ 
        res.redirect('/')
        return
    }
    next()
}

module.exports = authMiddleware