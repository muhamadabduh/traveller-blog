const express = require('express')
const app = express()
const port = process.env.port || 3000
const indexRoute = require('./routers/users/index')
const adminRouter = require('./routers/admins/index')
const userRouter = require('./routers/users/index')
const session = require('express-session')
const flash = require('express-flash-notification')


app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.use(flash(app))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('User'))
app.use('/', indexRoute)
app.use('/admin', adminRouter);
app.use('/users', userRouter)



app.listen(port, (req, res) => {
    console.log(`server is running on port ${port} `);
})

