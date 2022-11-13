const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
const sql = require("mssql");

//config sql server
var config = {
    user: 'sa1',         // Thay thông tin đăng nhập của tài khoản vừa tạo
    password: '123456',
    server: 'QUANGHAN\\NQH',    
    database: 'MelodyForEmotion',    // Chổ này thay bằng DB name
    options: {
        enableArithAbort: true,
        encrypt: true,
        trustServerCertificate: true
    }
};
// initial
app.use(cors())
app.use(express.json())

//test
app.get('/', function(req, res, next){
    res.send("Melody For Emotion")
})

//send data (account)
app.get('/login',async function (req,res, next){
    // connect database
    sql.connect(config, function (err) {
        if (err){ console.log(err); }
        var request = new sql.Request();// create Request object
        // query to the DB
        request.query('SELECT * FROM USERACCOUNTS', function (err, data) {
            if (err){ console.log(err); }
            res.send(data.recordset);// send records as a response
        });
    });
})

//post data (register)
app.post('/regis', async function(req,res){
    const body = req.body; 
    console.log(body) //test 
    // connect database
    // sql.connect(config, function (err) {
    //     if (err){ console.log(err); }
    //     var request = new sql.Request();// create Request object
    //     // query to the DB
    //     request.query('SELECT * FROM USERACCOUNTS', function (err, data) {
    //         if (err){ console.log(err); }
    //         res.send(data.recordset);// send records as a response
    //     });
    // });
    res.json(body)
})

app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))
