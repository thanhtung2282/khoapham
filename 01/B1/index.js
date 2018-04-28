// tạo server
const express = require('express');

const app = express();

const { PhepTinh } = require('./PhepTinh')
//route
app.get('/',(req,res) => res.send('<h1>Hello</h1>'));// đáp tra ra trình duyệt
// route has params
app.get('/chao/:name',(req,res)=>res.send('Xin Chào : ' + req.params.name));
app.get('/tinh/:tenPhepTinh/:soA/:soB',(req,res)=>{
    const {tenPhepTinh,soA,soB} = req.params;
    const pt = new PhepTinh(tenPhepTinh,soA,soB);
    res.send(pt.getResult())
});
app.listen(3000,() => console.log('server started'));
