const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars')
const app = express()
const port = 9999

const route = require('./routes')
// cứ là file index.js thì nó sẽ từ tìm đến k cần ghi ra
const db = require('./config/db')

// connect to DB
db.connect();


app.use(express.static(path.join(__dirname, 'public')))

// có cái midlleware để nó xử lí 
app.use(express.urlencoded({
  extended: true
}));
// gửa code từ javascript lên
app.use(express.json());

// 29 - 30p
app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
   sum: (a,b) => a + b,
}
}));
   app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


// này là thử nghiệm làm đi làm lại cho thuộc

// app.get('/', (req, res) => {
//   res.render('home')
// })
// app.get('/news', (req, res) => {
//   res.render('news')
// })
// app.get('/search', (req, res) => {
//   res.render('search')
// })
// app.post('/search', (req, res) => {
//   res.send('detail')
// })



// routes init
route(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})