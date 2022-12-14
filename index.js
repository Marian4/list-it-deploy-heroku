const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const { cookie } = require('express/lib/response')
const PORT = process.env.PORT || 3000
const path = require('path')
const db = require('./db/db')
const itemsRoutes = require('./routes/itemsRoutes')
const listsRoutes = require('./routes/listsRoutes')
const usersRoutes = require('./routes/usersRoutes')

const app = express()

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')
app.use(express.urlencoded({
	extended: true,
}))
app.use(express.json())

app.use(session({
    name: "session",
    secret: "our_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function (){},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000),
        httpOnly: true
    }
}))

app.use(flash())

app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})

app.use('/item', itemsRoutes)
app.use('/list', listsRoutes)
app.use('/user', usersRoutes)

app.get('/', (req, res) => {
	res.render('home', {layout: 'main'})
})

db.sync().then(() => {
	console.log('Aplicação conectada ao banco de dados')
	app.listen(PORT, (err)=> {
		console.log(err ? `Um erro ocorreu ao iniciar o sistema`: `Applicação iniciada na porta ${PORT}`)
	})
}).catch((err) => { console.log(err) })
