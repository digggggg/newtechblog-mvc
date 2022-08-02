const express = require('express')

const session = require('express-session')
const exphbs = require('express-handlebars')

const routes = require('./controllers')
const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001

const sess = {
    secret: 'Vince won\'t guess this seed',
    resave: false,
    saveUnitialized: false
}

app.use(session(sess))

const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Your Tech Server is on localhost:${PORT} nerd`)
})