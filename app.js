const ex= require('express')
const app = ex()

app.set("view engine", "ejs")

app.get('/', 
    (req, res) => {
        res.render('home')
});
app.get('/contact-us', (req, res)=>{
    res.render('contact-us')
 });
 
 app.get('/about-us', (req, res)=>{
    res.render('about-us')
 });


app.listen(3000)