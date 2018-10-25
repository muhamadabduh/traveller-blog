const express = require('express')
const app = express()
const port = process.env.port || 3000
const indexRoute = require('./routers/users/index')
const adminRouter = require('./routers/admins/index')


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('User'))
app.use('/', indexRoute)
app.use('/admin', adminRouter);



app.listen(port, (req,res) => {
    console.log(`server is running on port ${port} `);
})

