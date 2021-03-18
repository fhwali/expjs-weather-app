const express = require ('express')
const path = require ('path')
const hbs = require ('hbs')

const app = express();
const port = process.env.PORT || 3000;

//Public static Path

const staticPath = path.join(__dirname, '../public');

// Templates Dynamic Path
const views_path= path.join(__dirname, '../templates/views');
const partials_path= path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')
app.set('views', views_path)
hbs.registerPartials(partials_path)


app.use(express.static(staticPath))

//Routing

app.get('/', (req,res) => {
    // res.send('homepage')
    res.render('index', {
        title: 'homepage'
    })
})

app.get('/about', (req,res) => {
    // res.send('aboutpage')
    res.render('aboutMe')
})

app.get('/weather', (req,res) => {
    res.render('weather')
    
})

app.get('*', (req,res) => {
    res.render('404error' , {
        errorMsg: 'Oops! Page Not Found'
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})